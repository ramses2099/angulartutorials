import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-reverse',
  standalone: true,
  imports: [ReversePipe],
  templateUrl: './reverse.component.html',
  styleUrl: './reverse.component.css'
})
export class ReverseComponent {
  word = 'You are a champion';
}
