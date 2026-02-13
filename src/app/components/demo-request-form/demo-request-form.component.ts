import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DemoRequestService } from '../../services/demo-request.service';

declare const gtag: Function;

@Component({
  selector: 'app-demo-request-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TextFieldModule
  ],
  templateUrl: './demo-request-form.component.html',
  styleUrls: ['./demo-request-form.component.scss']
})
export class DemoRequestFormComponent {
  demoForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';

  roles = [
    { value: 'Dentist', label: 'Dentist' },
    { value: 'Office Manager', label: 'Office Manager' },
    { value: 'Practice Staff', label: 'Practice Staff' },
    { value: 'Practice Owner', label: 'Practice Owner' },
    { value: 'Sleep Specialist', label: 'Sleep Specialist' },
    { value: 'Other', label: 'Other' }
  ];

  practiceSizes = [
    { value: 'Solo', label: 'Solo Practice' },
    { value: '2-5', label: '2\u20135 Providers' },
    { value: '6-10', label: '6\u201310 Providers' },
    { value: '11-25', label: '11\u201325 Providers' },
    { value: '25+', label: '25+ Providers' },
  ];

  constructor(
    private fb: FormBuilder,
    private demoRequestService: DemoRequestService
  ) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      practiceName: ['', Validators.required],
      practiceSize: [''],
      role: ['Dentist'],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.demoForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';

      this.demoRequestService.submitDemoRequest(this.demoForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.isSubmitted = true;
            this.isSubmitting = false;

            if (typeof gtag !== 'undefined') {
              gtag('event', 'demo_request_submitted', {
                'event_category': 'demo',
                'event_label': this.demoForm.value.role || 'not-specified'
              });
            }
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          this.errorMessage = 'Something went wrong. Please try again.';
          console.error('Demo request submission error:', error);
        }
      });
    }
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.demoForm.reset({ role: 'Dentist' });
  }
}
