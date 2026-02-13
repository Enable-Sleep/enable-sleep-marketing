# Enable Sleep Codebase Implementation Notes

## How Blog Content Maps to This Angular Codebase

This file bridges the content generation framework with the actual website implementation.

## Tech Stack
- **Angular 20.3** (standalone components, signals)
- **Angular Material 20** (Material 3 theme, orange primary)
- **Tailwind CSS 3.4** for styling
- **TypeScript** strict mode

## Blog Architecture

### Data Model (`src/app/data/blog-posts.data.ts`)
Blog posts are stored as TypeScript data objects, not markdown files. Each post contains:

```typescript
export interface BlogPost {
  slug: string;           // URL slug e.g. 'ada-2017-standard-of-care'
  title: string;          // Full post title
  excerpt: string;        // 1-2 sentence summary for listing page
  author: string;         // 'Dr. Joseph Zelk'
  date: string;           // ISO date 'YYYY-MM-DD'
  readTime: string;       // e.g. '8 min read'
  category: string;       // Maps to one of 5 content themes
  heroIcon: string;       // Material icon name for hero
  seoDescription: string; // Meta description for SEO
  seoKeywords: string;    // Comma-separated keywords
  sections: BlogSection[];
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'stat-callout' | 'quote' | 'list' | 'cta';
  content: string;
  items?: string[];       // For 'list' type
  stat?: string;          // For 'stat-callout' type
  label?: string;         // For 'stat-callout' type
}
```

### Blog Content Themes → Categories
1. "Standard of Care" → category: `'standard-of-care'`
2. "Undiagnosed Epidemic" → category: `'undiagnosed-epidemic'`
3. "Beauty Meets Medicine" → category: `'beauty-meets-medicine'`
4. "Dr. Zelk's Track Record" → category: `'dr-zelk-story'`
5. "Remove the Barriers" → category: `'removing-barriers'`

### Routes
- `/blog` → Blog listing page (grid of post cards)
- `/blog/:slug` → Individual blog post page

### Components
- `src/app/pages/blog/blog.component.ts` - Listing page
- `src/app/pages/blog-post/blog-post.component.ts` - Individual post
- Both use shared components: SectionHeader, CtaBanner, ScrollAnimateDirective

### Writing for Blog Sections

When writing post content, structure it as an array of `BlogSection` objects:

- **`paragraph`**: Regular body text. Use HTML entities for special chars.
- **`heading`**: Section subheadings (rendered as h2).
- **`stat-callout`**: Big stat display (e.g. stat: '80%', label: 'of moderate-severe OSA is undiagnosed')
- **`quote`**: Dr. Zelk quotes (displayed in styled blockquote)
- **`list`**: Bullet points via `items` array
- **`cta`**: Call-to-action block at end of post

### CTAs in Blog Posts
All blog CTAs should link to `/demo` (Request a Demo). The CTA section's `content` field is the heading text.

### SEO
Each blog post's `seoDescription` and `seoKeywords` feed into the SeoService for meta tags.

### Styling Conventions
- Posts use Tailwind prose-style classes (max-w-3xl, text-gray-700, etc.)
- Stats use `text-accent-green` or `text-primary` for emphasis
- Quotes use left border accent styling consistent with the site
- Section backgrounds alternate white/gray-50

## Content-to-Code Mapping

| Content Framework Element | Codebase Implementation |
|--------------------------|------------------------|
| Blog post body text | `{ type: 'paragraph', content: '...' }` |
| Section headlines | `{ type: 'heading', content: '...' }` |
| Dr. Zelk quotes | `{ type: 'quote', content: '...' }` |
| Key statistics | `{ type: 'stat-callout', stat: '80%', label: '...' }` |
| Bullet point lists | `{ type: 'list', items: ['...', '...'] }` |
| Call-to-action | `{ type: 'cta', content: '...' }` |
| SEO meta description | `seoDescription` field |
| SEO keywords | `seoKeywords` field |

## Navigation
Blog link added to header nav and footer product links columns.
