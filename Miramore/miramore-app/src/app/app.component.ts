import { Component, OnInit } from '@angular/core';
import * as  firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCiGdrhJ9gOxe-SA-WKkZFcz9j4uon8s4g",
      authDomain: "miramore-2bd96.firebaseapp.com",
    })
  }

}
