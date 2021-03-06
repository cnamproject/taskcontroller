import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { AddTaskComponent } from './views/add-task/add-task.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]; 
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}