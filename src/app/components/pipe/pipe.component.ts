import { Component } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  num = 103.4564;
  birthday = new Date(2024,2,3);
  cost = 4560.354;

}
