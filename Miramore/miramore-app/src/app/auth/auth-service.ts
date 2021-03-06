import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import { SignInModel } from './models/signin.model';
import { SignUpModel } from './models/signup.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { OrderService } from '../orders/order-service';
import { OrderCreate } from '../products/models/order-create';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    token: string
    userEmail: string
    userCurrentOrder: string
    user: {}
    emptyOrder: OrderCreate
    initialOrderId: string
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private orderService: OrderService,

    ) { }

    login(body: SignInModel) {
        firebase.auth().signInWithEmailAndPassword(body["email"], body["password"])
            .then(data => {
                this.user = firebase.auth().currentUser
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => { this.token = token })
                    .then(() => {
                        this.makeEmptyOrder()
                        .subscribe(data => {
                            this.initialOrderId = data["name"]
                            this.orderService.initialOrderId = data['name']
                            this.router.navigate(['/product/list']);
                            this.toastr.success('Logged In', 'Success');
                        })
                    })


            })
            .catch(err => {
                this.toastr.error(err.message, 'Warning');
            })
    }

    makeEmptyOrder() {
        this.emptyOrder = new OrderCreate(this.user['email'], [])
        return this.orderService.createInitialOrder(this.emptyOrder)
            
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
    getUserEmail() {
        return this.userEmail = firebase.auth().currentUser.email
    }

    isAdmin() {
        if (this.user['email'] == "moni@abv.bg") {
            return true
        }
        return false
    }

    getMyCredentials() {
     
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }

}