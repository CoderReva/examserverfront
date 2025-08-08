import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule, JsonPipe],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

    public user= { 
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phone: '',
    };

  ngOnInit(): void {
    // Initialization logic can go here
  }

  formSubmit() {
    // Handle form submission logic here
    console.log(this.user);
    if (this.user.userName=='' || this.user.userName==null) {
    alert('User name must be required !!'); 
    return;
  }
   alert('Form submitted!');
  }
}
