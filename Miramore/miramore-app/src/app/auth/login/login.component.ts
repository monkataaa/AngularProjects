import { Component, OnInit } from '@angular/core';
import {SignInModel} from '../models/signin.model';
import { AuthService } from '../auth-service';
import { Route, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : SignInModel
  constructor(private authService : AuthService) {
    this.model = new SignInModel("", "");
  }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.model)    
  }

 

}
