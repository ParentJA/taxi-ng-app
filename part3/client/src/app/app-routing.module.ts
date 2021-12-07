import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsRider } from './services/is-rider.service';

import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RiderComponent } from './components/rider/rider.component';
import { RiderDashboardComponent } from './components/rider-dashboard/rider-dashboard.component';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TripListResolver } from './services/trip-list.resolver';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'rider',
    component: RiderComponent,
    canActivate: [
      IsRider
    ],
    children: [
      {
        path: 'request',
        component: RiderRequestComponent
      },
      {
        path: '',
        component: RiderDashboardComponent,
        resolve: { trips: TripListResolver }
      }
    ]
  },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
