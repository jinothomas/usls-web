import { Routes } from '@angular/router';
import { LoginComponent } from './user-management/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];
