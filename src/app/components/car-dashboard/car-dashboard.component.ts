import { Component } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-car-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './car-dashboard.component.html',
  styleUrl: './car-dashboard.component.css'
})
export class CarDashboardComponent {

  display ='';
  // constructor DI depnedency injection
  constructor(private carService: CarServiceService) {
    this.display = carService.getCars().join(' ⭐️ ');
  }
}
