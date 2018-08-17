import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import { SignInModel } from './models/signin.model';
import { SignUpModel } from './models/signup.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    token: string

    constructor(
        private toastr: ToastrService,
        private router: Router
    ) { }

    login(body: SignInModel) {
        console.log(body);
        console.log("body.email =>", body["email"]);
        console.log("body.password =>", body["password"]);
        firebase.auth().signInWithEmailAndPassword(body["email"], body["password"])
            .then(data => {
                firebase.auth().currentUser.getIdToken()
                  .then((token : string) => {this.token = token})
                //   this.router.navigate(['/recipes/start']);
                  this.toastr.success('Logged In', 'Success');
              })
            .catch(err => {
                this.toastr.error(err.message, 'Warning');
            })
    }

    register(body: SignUpModel) {
        firebase.auth().createUserWithEmailAndPassword(body["email"], body["password"])
            .then(data => {
                this.toastr.success('Registration succsessful', 'Success');
                this.router.navigate(['/auth/login']);
            })
            .catch(err => {
                this.toastr.error(err.message, 'Warning');
            })
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {
                this.router.navigate(['/auth/login']);
                this.token = null;
            });
    }

    getToken() {
        firebase.auth()
            .currentUser
            .getIdToken()
            .then((token: string) => {
                this.token = token;
            })

        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }

}