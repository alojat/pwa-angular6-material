import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';

export const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'dash', component: DashComponent },
  { path: '**', component: DashComponent }
// tslint:disable-next-line:eofline
];