import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TripService, WritableTripData } from '../../services/trip.service';

@Component({
  selector: 'app-rider-request',
  templateUrl: './rider-request.component.html',
  styleUrls: ['./rider-request.component.css']
})
export class RiderRequestComponent {
  trip: WritableTripData = {
    pick_up_address: '',
    drop_off_address: '',
    status: 'REQUESTED',
    driver: null,
    rider: null
  };

  constructor(
    private router: Router,
    private tripService: TripService
  ) {}

  onSubmit(): void {
    this.trip.rider = AuthService.getUser()!;
    this.tripService.createTrip(this.trip);
    this.router.navigateByUrl('/rider');
  }
}
