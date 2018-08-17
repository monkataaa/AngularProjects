import { Component, OnInit } from '@angular/core';


import { SignUpModel } from '../models/signup.model';
import { AuthService } from '../auth-service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : SignUpModel;
  constructor(private authService : AuthService) { 
    this.model = new SignUpModel("", "", "");
  }
  ngOnInit() {
  }

  signUp() {
    this.authService.register(this.model)    
  }

}
