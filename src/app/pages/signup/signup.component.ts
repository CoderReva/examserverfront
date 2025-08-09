import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UserService } from '../../components/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule, JsonPipe],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) { }

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
    // alert('User name must be required !!'); 
    this.snack.open('User name is required !!', '', {
        duration: 3000,
       panelClass: ['text-center']
      });
      return;
    }

  // Add user Userservice
   this.userService.addUser(this.user).subscribe({
      next: (data: any) => {
        //if success
        console.log(data);
        // alert('Success !!');
        Swal.fire('Success !!', `registered User name: ${data.userName}`, 'success');
      },
      //if error
      error: (error: any) => {
        console.log(error);
        // alert('Something went wrong !!');
        this.snack.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    });
  }
}
