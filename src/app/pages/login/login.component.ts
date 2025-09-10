import { Component } from '@angular/core';
import { MatFormField, MatInputModule } from '@angular/material/input';   
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatInputModule, MatButtonModule, MatCardModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
