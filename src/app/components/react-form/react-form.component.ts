import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-react-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css'
})
export class ReactFormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handlerSubmit(){
    alert(this.profileForm.value.name + ' ' + this.profileForm.value.email);
  }
}
