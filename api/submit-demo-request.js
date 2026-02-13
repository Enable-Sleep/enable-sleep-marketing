const Airtable = require('airtable');

const rateLimitStore = new Map();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', process.env.NODE_ENV === 'production'
      ? 'https://enablesleep.com'
      : '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', process.env.NODE_ENV === 'production'
    ? 'https://enablesleep.com'
    : '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const clientIp = (req.headers['x-forwarded-for'] || '').split(',')[0] ||
                     req.headers['x-real-ip'] ||
                     'unknown';

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        error: 'Too many submissions. Please try again later.'
      });
    }

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Missing Airtable credentials');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { name, email, practiceName, practiceSize, role, message } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!practiceName || typeof practiceName !== 'string') {
      return res.status(400).json({ error: 'Practice name is required' });
    }

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE_ID);

    await base('Demo Requests').create([
      {
        fields: {
          Name: name.trim(),
          Email: email.trim(),
          'Practice Name': practiceName.trim(),
          'Practice Size': practiceSize || '',
          Role: role || '',
          Message: message || '',
          'Submitted At': new Date().toISOString(),
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: 'Demo request submitted successfully!'
    });

  } catch (error) {
    console.error('Error submitting demo request to Airtable:', error);

    return res.status(500).json({
      error: 'Failed to submit. Please try again later.'
    });
  }
};
