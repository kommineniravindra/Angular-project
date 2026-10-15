import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EnrollComponent } from './components/enroll/enroll.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'GoMinds | Premier Angular Training Academy' },
  { path: 'courses', component: CoursesComponent, title: 'Courses & Curriculum | GoMinds Angular Academy' },
  { path: 'timetable', component: TimetableComponent, title: 'Batch Timetable & Schedule | GoMinds Academy' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Mentors & Mission | GoMinds Academy' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Admissions & Inquiries | GoMinds Academy' },
  { path: 'enroll', component: EnrollComponent, title: 'Enroll Now | GoMinds Angular Academy' },
  { path: '**', redirectTo: 'home' }
];
