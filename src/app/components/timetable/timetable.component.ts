import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface BatchSchedule {
  id: string;
  courseTitle: string;
  type: 'weekday' | 'weekend';
  days: string;
  timeSlot: string;
  startDate: string;
  duration: string;
  mentor: string;
  mentorRole: string;
  mode: string;
  seatsLeft: number;
  status: 'Open' | 'Filling Fast' | 'Almost Full';
}

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {
  activeTab: 'all' | 'weekday' | 'weekend' = 'all';

  batches: BatchSchedule[] = [
    {
      id: 'b1',
      courseTitle: 'Angular 19 & Signals Mastery (Morning Batch)',
      type: 'weekday',
      days: 'Monday to Thursday',
      timeSlot: '07:30 AM - 09:00 AM IST',
      startDate: 'Starting Next Monday',
      duration: '8 Weeks',
      mentor: 'Harish Reddy',
      mentorRole: 'Ex-Google Angular Lead',
      mode: 'Live Interactive Online + Lab',
      seatsLeft: 4,
      status: 'Filling Fast'
    },
    {
      id: 'b2',
      courseTitle: 'Angular 19 & Signals Mastery (Evening Batch)',
      type: 'weekday',
      days: 'Monday to Thursday',
      timeSlot: '08:00 PM - 09:30 PM IST',
      startDate: 'Starting Nov 3, 2026',
      duration: '8 Weeks',
      mentor: 'Kiranmai Rao',
      mentorRole: 'Principal Frontend Architect',
      mode: 'Live Online (Interactive)',
      seatsLeft: 7,
      status: 'Open'
    },
    {
      id: 'b3',
      courseTitle: 'Enterprise NgRx & Microfrontends',
      type: 'weekend',
      days: 'Saturday & Sunday',
      timeSlot: '10:00 AM - 01:00 PM IST',
      startDate: 'Starting This Saturday',
      duration: '6 Weeks',
      mentor: 'Suresh Kumar',
      mentorRole: 'Staff Software Architect',
      mode: 'Live Online + Hybrid Classroom',
      seatsLeft: 2,
      status: 'Almost Full'
    },
    {
      id: 'b4',
      courseTitle: 'Full Stack Angular 19 & NestJS Track',
      type: 'weekend',
      days: 'Saturday & Sunday',
      timeSlot: '02:30 PM - 05:30 PM IST',
      startDate: 'Starting Nov 8, 2026',
      duration: '10 Weeks',
      mentor: 'Aditya Sen',
      mentorRole: 'Full Stack Tech Lead',
      mode: 'Live Online + GitHub Code Review',
      seatsLeft: 9,
      status: 'Open'
    },
    {
      id: 'b5',
      courseTitle: 'Angular Testing, Jest & Cypress Bootcamp',
      type: 'weekend',
      days: 'Saturday & Sunday',
      timeSlot: '06:00 PM - 08:30 PM IST',
      startDate: 'Starting Nov 15, 2026',
      duration: '4 Weeks',
      mentor: 'Deepak Varma',
      mentorRole: 'Senior QA Architect',
      mode: 'Live Interactive Labs',
      seatsLeft: 5,
      status: 'Open'
    }
  ];

  filteredBatches(): BatchSchedule[] {
    if (this.activeTab === 'all') return this.batches;
    return this.batches.filter(b => b.type === this.activeTab);
  }

  setTab(tab: 'all' | 'weekday' | 'weekend') {
    this.activeTab = tab;
  }
}
