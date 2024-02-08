import { Routes } from '@angular/router';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'tasks',
        loadComponent: () => import('./ui/tasks/tasks.component').then(c => c.TasksComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./ui/dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }];

