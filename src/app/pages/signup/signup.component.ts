import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  formSubmit() {
    // Handle form submission logic here
    alert('Form submitted!');
  }

}
