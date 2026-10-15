import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stats = [
    { value: '5,200+', label: 'Engineers Trained', icon: 'fa-solid fa-user-graduate' },
    { value: '98.4%', label: 'Placement Rate', icon: 'fa-solid fa-briefcase' },
    { value: '4.95 / 5', label: 'Student Rating', icon: 'fa-solid fa-star' },
    { value: '140+', label: 'Hiring Partners', icon: 'fa-solid fa-building' }
  ];

  features: FeatureCard[] = [
    {
      icon: 'fa-solid fa-bolt',
      title: 'Modern Angular 19 & Signals',
      description: 'Master fine-grained reactivity with Angular Signals, deferrable views, computed states, and zoneless change detection.',
      tag: 'Cutting-Edge'
    },
    {
      icon: 'fa-solid fa-diagram-project',
      title: 'Enterprise Architecture & NgRx',
      description: 'Learn clean code, repository patterns, microfrontends with Module Federation, and scalable NgRx / ComponentStore state.',
      tag: 'Enterprise Grade'
    },
    {
      icon: 'fa-solid fa-code-commit',
      title: 'Real-World Production Projects',
      description: 'Build end-to-end SaaS platforms with authentication, payments, real-time WebSockets, and CI/CD pipelines.',
      tag: 'Hands-on Labs'
    },
    {
      icon: 'fa-solid fa-chalkboard-user',
      title: '1-on-1 Mentorship & Code Reviews',
      description: 'Get your PRs reviewed by Principal Architects. Receive line-by-line feedback to write pristine, idiomatic TypeScript.',
      tag: 'Elite Guidance'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Rohan Sharma',
      role: 'Senior Angular Engineer',
      company: 'Tech Mahindra',
      quote: 'GoMinds completely transformed my career. The depth of Signals, Nx monorepos, and architectural design helped me crack a 24 LPA role!',
      rating: 5
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Frontend Lead',
      company: 'Deloitte Digital',
      quote: 'The best investment for any web developer. The mock interviews, live project debugging, and mentor support were world-class.',
      rating: 5
    },
    {
      name: 'Vikram Mehta',
      role: 'Full Stack Architect',
      company: 'Oracle Cloud',
      quote: 'Their Angular 19 + NestJS full-stack track is unmatchable. We built production-ready apps from scratch. Highly recommended!',
      rating: 5
    }
  ];
}
