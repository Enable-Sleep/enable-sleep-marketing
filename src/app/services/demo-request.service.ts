import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DemoRequestSubmission {
  name: string;
  email: string;
  practiceName: string;
  practiceSize?: string;
  role?: string;
  message?: string;
}

export interface DemoRequestResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemoRequestService {
  private apiUrl = '/api/submit-demo-request';

  constructor(private http: HttpClient) {}

  submitDemoRequest(submission: DemoRequestSubmission): Observable<DemoRequestResponse> {
    return this.http.post<DemoRequestResponse>(this.apiUrl, submission);
  }
}
