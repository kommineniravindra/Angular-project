import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface CourseModule {
  week: string;
  topic: string;
  details: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  level: string;
  duration: string;
  mode: string;
  hours: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  originalPrice: string;
  tags: string[];
  modules: CourseModule[];
  expanded?: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  selectedFilter: string = 'all';

  courses: Course[] = [
    {
      id: 'ang-19-mastery',
      title: 'Angular 19 Complete Mastery',
      tagline: 'Zero to Hero: Fundamentals, Signals, Deferrable Views, and Modern Reactive Paradigms',
      level: 'Beginner to Advanced',
      duration: '8 Weeks',
      hours: '65+ Hours',
      mode: 'Live Interactive + Lab Access',
      badge: 'Most Popular',
      isPopular: true,
      price: '₹14,999',
      originalPrice: '₹24,999',
      tags: ['Angular 19', 'TypeScript 5.7', 'Signals', 'RxJS', 'Standalone Components', 'Routing'],
      expanded: true,
      modules: [
        {
          week: 'Week 1-2',
          topic: 'Modern TypeScript & Angular 19 Foundations',
          details: ['ES2022+ features & TypeScript 5 strict typing', 'Standalone architecture & modern control flow (@if, @for, @switch)', 'Component lifecycle & content projection']
        },
        {
          week: 'Week 3-4',
          topic: 'Fine-Grained Reactivity with Signals',
          details: ['Signal primitives (signal, computed, effect)', 'Model inputs, output() API, and two-way binding', 'Zoneless change detection & performance tuning']
        },
        {
          week: 'Week 5-6',
          topic: 'Forms, HTTP Client & RxJS Interop',
          details: ['Reactive typed forms with custom asynchronous validators', 'HttpInterceptorFn with functional interceptors', 'RxJS to Signal interop (toSignal, toObservable)']
        },
        {
          week: 'Week 7-8',
          topic: 'Capstone SaaS Project & Production Deployment',
          details: ['Building complete CRM dashboard from scratch', 'State caching, deferrable views (@defer)', 'Automated GitHub Actions CI/CD to AWS/Vercel']
        }
      ]
    },
    {
      id: 'ngrx-architect',
      title: 'Enterprise NgRx & State Architecture',
      tagline: 'Master scalable state management, ComponentStore, SignalStore, and Microfrontend patterns',
      level: 'Intermediate to Lead',
      duration: '6 Weeks',
      hours: '50+ Hours',
      mode: 'Live Weekend Batches',
      badge: 'High In-Demand',
      price: '₹12,499',
      originalPrice: '₹19,999',
      tags: ['NgRx Store', 'NgRx SignalStore', 'ComponentStore', 'Nx Monorepo', 'Microfrontends'],
      expanded: false,
      modules: [
        {
          week: 'Week 1-2',
          topic: 'NgRx Global Store & Action Hygiene',
          details: ['Action creators, reducers, and memoized selectors', 'Side-effects management with NgRx Effects', 'Entity state adapter for high-performance collections']
        },
        {
          week: 'Week 3-4',
          topic: 'The Modern NgRx SignalStore',
          details: ['Creating standalone Signal Stores with withState and withMethods', 'Custom reactive plugins & entity management', 'Component-level reactive orchestration']
        },
        {
          week: 'Week 5-6',
          topic: 'Nx Monorepos & Module Federation',
          details: ['Building enterprise Nx workspaces with bounded contexts', 'Webpack & Vite Module Federation for Microfrontends', 'Shared design system libraries']
        }
      ]
    },
    {
      id: 'fullstack-ang-nest',
      title: 'Full Stack Angular 19 & NestJS',
      tagline: 'End-to-End Type-Safe Engineering with NestJS, PostgreSQL, Prisma, and Docker',
      level: 'All Levels',
      duration: '10 Weeks',
      hours: '80+ Hours',
      mode: 'Live Hybrid Batches',
      badge: 'Full Stack Track',
      price: '₹18,999',
      originalPrice: '₹29,999',
      tags: ['Angular 19', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'JWT Auth', 'Docker', 'WebSockets'],
      expanded: false,
      modules: [
        {
          week: 'Week 1-3',
          topic: 'Backend Mastery with NestJS & TypeScript',
          details: ['Dependency injection architecture & controllers', 'Database modeling with Prisma ORM & PostgreSQL', 'JWT authentication, guards, and role-based access control (RBAC)']
        },
        {
          week: 'Week 4-7',
          topic: 'Angular Frontend Integration & Real-time WebSockets',
          details: ['Type-safe API contract sharing via monorepo', 'Real-time notifications with Socket.io & WebSockets', 'File uploads with S3 and transactional emails']
        },
        {
          week: 'Week 8-10',
          topic: 'SSR Hydration, Dockerization & Cloud DevOps',
          details: ['Angular Universal SSR with incremental hydration', 'Docker multi-stage builds & containerization', 'Deploying production clusters to Kubernetes / Render']
        }
      ]
    },
    {
      id: 'testing-qa-mastery',
      title: 'Angular Testing & Quality Engineering',
      tagline: 'Write rock-solid unit, integration, and E2E test suites with Jest, Testing Library & Cypress',
      level: 'Intermediate',
      duration: '4 Weeks',
      hours: '32+ Hours',
      mode: 'Weekend Fast-Track',
      badge: 'Career Accelerator',
      price: '₹8,999',
      originalPrice: '₹14,999',
      tags: ['Jest', 'Angular Testing Library', 'Cypress', 'Playwright', 'Mocking', 'CI Quality Gates'],
      expanded: false,
      modules: [
        {
          week: 'Week 1-2',
          topic: 'Unit Testing Components & Services with Jest',
          details: ['Migrating from Karma/Jasmine to Jest for 10x faster tests', 'Testing Signal-based components and inputs', 'Mocking HTTP dependencies and asynchronous timers']
        },
        {
          week: 'Week 3-4',
          topic: 'End-to-End Testing with Cypress & Playwright',
          details: ['Writing resilient user journey tests in Cypress', 'Network mocking, intercepted responses, and visual regression', 'Integrating 100% test coverage gates into GitHub Actions']
        }
      ]
    }
  ];

  filteredCourses(): Course[] {
    if (this.selectedFilter === 'all') return this.courses;
    if (this.selectedFilter === 'popular') return this.courses.filter(c => c.isPopular);
    if (this.selectedFilter === 'advanced') return this.courses.filter(c => c.id === 'ngrx-architect' || c.id === 'fullstack-ang-nest');
    return this.courses;
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  toggleModule(course: Course) {
    course.expanded = !course.expanded;
  }
}
