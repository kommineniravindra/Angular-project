import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  formData = {
    fullName: '',
    email: '',
    phone: '',
    program: 'ang-19-mastery',
    batchType: 'weekday-morning',
    experience: '1-3-years',
    message: ''
  };

  isSubmitted = false;
  isSubmitting = false;

  faqs: FAQ[] = [
    {
      question: 'Do you offer 100% placement support for Angular developers?',
      answer: 'Yes! We have an active network of 140+ hiring partners. We conduct mock technical interviews, resume optimization workshops, GitHub portfolio reviews, and coordinate direct interview drives until you are successfully placed.',
      isOpen: true
    },
    {
      question: 'Will I get access to session recordings if I miss a live class?',
      answer: 'Absolutely. Every single live lecture is recorded in high definition and uploaded to your student portal within 2 hours of class completion. You receive lifetime access to all lectures, slides, and project repositories.',
      isOpen: false
    },
    {
      question: 'Can I pay the course fees in monthly EMI or installments?',
      answer: 'Yes, we provide 0% interest EMI options up to 6 months through major credit/debit cards and education finance partners. You can also pay in two convenient installments.',
      isOpen: false
    },
    {
      question: 'Are there prerequisites before enrolling in Angular 19 mastery?',
      answer: 'A fundamental understanding of basic JavaScript (ES6) and HTML/CSS is recommended. However, we begin week 1 with an extensive deep-dive into Modern TypeScript to ensure everyone starts on solid ground.',
      isOpen: false
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['course']) {
        this.formData.program = params['course'];
      }
      if (params['batch']) {
        if (params['batch'] === 'b1') this.formData.batchType = 'weekday-morning';
        else if (params['batch'] === 'b2') this.formData.batchType = 'weekday-evening';
        else this.formData.batchType = 'weekend';
      }
    });
  }

  toggleFaq(faq: FAQ) {
    faq.isOpen = !faq.isOpen;
  }

  onSubmit() {
    if (!this.formData.fullName || !this.formData.email || !this.formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
    }, 1200);
  }

  resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      program: 'ang-19-mastery',
      batchType: 'weekday-morning',
      experience: '1-3-years',
      message: ''
    };
    this.isSubmitted = false;
  }
}
