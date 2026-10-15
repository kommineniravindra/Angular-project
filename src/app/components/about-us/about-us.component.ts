import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Mentor {
  name: string;
  role: string;
  experience: string;
  exCompany: string;
  bio: string;
  specialization: string[];
  avatarInitial: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  mentors: Mentor[] = [
    {
      name: 'Harish Reddy',
      role: 'Founder & Principal Angular Mentor',
      experience: '14+ Years in Enterprise Web',
      exCompany: 'Ex-Google Angular Lead & Architect',
      bio: 'Harish has architected mission-critical web applications serving millions of daily active users. He is an active open-source contributor and speaker at ng-conf.',
      specialization: ['Angular 19 Internals', 'Zoneless Change Detection', 'Signals Architecture'],
      avatarInitial: 'HR'
    },
    {
      name: 'Kiranmai Rao',
      role: 'Lead Architect & State Management Coach',
      experience: '11+ Years in Software Engineering',
      exCompany: 'Ex-Microsoft Core Engineer',
      bio: 'Specializing in complex reactive systems, Kiranmai has trained hundreds of developers on NgRx, RxJS stream patterns, and microfrontends with Module Federation.',
      specialization: ['NgRx SignalStore', 'RxJS Operators', 'Microfrontends & Nx'],
      avatarInitial: 'KR'
    },
    {
      name: 'Suresh Kumar',
      role: 'Full Stack & Cloud DevOps Specialist',
      experience: '12+ Years in Distributed Systems',
      exCompany: 'Ex-Thoughtworks Tech Lead',
      bio: 'Suresh leads our full-stack and cloud deployments track, teaching NestJS, PostgreSQL, Docker containerization, and AWS infrastructure pipelines.',
      specialization: ['NestJS Architecture', 'Docker & Kubernetes', 'Cloud CI/CD'],
      avatarInitial: 'SK'
    }
  ];

  milestones = [
    { year: '2016', event: 'Founded in Hyderabad as a boutique Angular 2 laboratory for working professionals.' },
    { year: '2019', event: 'Crossed 1,500 placed students; partnered with 40+ MNCs across India & Singapore.' },
    { year: '2022', event: 'Launched Global Remote Campus with students from 25+ countries worldwide.' },
    { year: '2026', event: 'Pioneered India\'s first Angular 19 & Signals-first production curriculum with 98.4% placement rate.' }
  ];
}
