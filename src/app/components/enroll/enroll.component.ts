import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface EnrollmentCourse {
  id: string;
  name: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  badge: string;
}

interface BatchSlot {
  id: string;
  name: string;
  type: string;
  time: string;
  startDate: string;
  mentor: string;
}

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent implements OnInit {
  currentStep = 1;

  courses: EnrollmentCourse[] = [
    {
      id: 'ang-19-mastery',
      name: 'Angular 19 Complete Mastery',
      duration: '8 Weeks • 65+ Hours',
      originalPrice: 24999,
      discountedPrice: 14999,
      badge: 'Most Popular'
    },
    {
      id: 'ngrx-architect',
      name: 'Enterprise NgRx & State Architecture',
      duration: '6 Weeks • 50+ Hours',
      originalPrice: 19999,
      discountedPrice: 12499,
      badge: 'High In-Demand'
    },
    {
      id: 'fullstack-ang-nest',
      name: 'Full Stack Angular 19 & NestJS',
      duration: '10 Weeks • 80+ Hours',
      originalPrice: 29999,
      discountedPrice: 18999,
      badge: 'Full Stack Track'
    },
    {
      id: 'testing-qa-mastery',
      name: 'Angular Testing & QA Bootcamp',
      duration: '4 Weeks • 32+ Hours',
      originalPrice: 14999,
      discountedPrice: 8999,
      badge: 'Fast Track'
    }
  ];

  batches: BatchSlot[] = [
    {
      id: 'b1',
      name: 'Weekday Morning Cohort',
      type: 'Mon - Thu',
      time: '07:30 AM - 09:00 AM IST',
      startDate: 'Starting Next Monday',
      mentor: 'Harish Reddy (Ex-Google)'
    },
    {
      id: 'b2',
      name: 'Weekday Evening Cohort',
      type: 'Mon - Thu',
      time: '08:00 PM - 09:30 PM IST',
      startDate: 'Starting Nov 3, 2026',
      mentor: 'Kiranmai Rao (Ex-Microsoft)'
    },
    {
      id: 'b3',
      name: 'Weekend Fast-Track Cohort',
      type: 'Sat & Sun',
      time: '10:00 AM - 01:00 PM IST',
      startDate: 'Starting This Saturday',
      mentor: 'Suresh Kumar (Staff Architect)'
    }
  ];

  selectedCourseId = 'ang-19-mastery';
  selectedBatchId = 'b1';
  trainingMode = 'online';

  studentData = {
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: '1-3-years',
    referralSource: 'google'
  };

  couponCode = '';
  appliedCoupon = '';
  couponDiscount = 0;
  couponError = '';

  paymentOption = 'full'; // 'full', 'emi', 'token'
  emiTenure = '3';
  isProcessing = false;
  isCompleted = false;
  enrollmentId = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['course'] && this.courses.some(c => c.id === params['course'])) {
        this.selectedCourseId = params['course'];
      }
      if (params['batch'] && this.batches.some(b => b.id === params['batch'])) {
        this.selectedBatchId = params['batch'];
      }
    });
  }

  get selectedCourse(): EnrollmentCourse {
    return this.courses.find(c => c.id === this.selectedCourseId) || this.courses[0];
  }

  get selectedBatch(): BatchSlot {
    return this.batches.find(b => b.id === this.selectedBatchId) || this.batches[0];
  }

  get subtotal(): number {
    return this.selectedCourse.discountedPrice;
  }

  get totalPayable(): number {
    const total = this.subtotal - this.couponDiscount;
    return total > 0 ? total : 0;
  }

  get tokenAmount(): number {
    return 999;
  }

  get emiMonthlyAmount(): number {
    const months = parseInt(this.emiTenure, 10);
    return Math.round(this.totalPayable / months);
  }

  applyCoupon() {
    this.couponError = '';
    const code = this.couponCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'ANGULAR19' || code === 'GOMINDS10') {
      this.couponDiscount = Math.round(this.subtotal * 0.1);
      this.appliedCoupon = code;
      this.couponCode = '';
    } else if (code === 'EARLYBIRD') {
      this.couponDiscount = 1500;
      this.appliedCoupon = code;
      this.couponCode = '';
    } else {
      this.couponError = 'Invalid coupon code. Try ANGULAR19 for 10% off!';
    }
  }

  removeCoupon() {
    this.appliedCoupon = '';
    this.couponDiscount = 0;
  }

  goToStep(step: number) {
    if (step === 2) {
      this.currentStep = 2;
    } else if (step === 3) {
      if (!this.studentData.fullName || !this.studentData.email || !this.studentData.phone) {
        alert('Please fill in your name, email, and phone number to proceed.');
        return;
      }
      this.currentStep = 3;
    } else {
      this.currentStep = step;
    }
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }

  completeEnrollment() {
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.isCompleted = true;
      this.enrollmentId = 'GM-ANG-' + Math.floor(100000 + Math.random() * 900000);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 1500);
  }
}
