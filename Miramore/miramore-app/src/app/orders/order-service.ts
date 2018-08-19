import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductList } from '../products/models/product-list'
import { ProductCreate } from '../products/models/product-create'
import { OrderCreate } from '../products/models/order-create';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const baseUrl = 'https://miramore-2bd96.firebaseio.com/orders'

@Injectable({ providedIn: 'root' })
export class OrderService {
    initialOrderId : string
    myProductsIds: string[]=[]
    constructor(
        private http: HttpClient,
        private router : Router,
        private toastr : ToastrService) {  }

    createOrder(body: OrderCreate) {
        return this.http.post(`${baseUrl}.json`, body)
    }

    createInitialOrder (body: OrderCreate) {
        return this.http.post(`${baseUrl}.json`, body)

    }
    getMyOrder(){
        return this.http.get(`${baseUrl}/${this.initialOrderId}/.json`)
    }

    buyProduct(body){
        return this.http.patch(`${baseUrl}/${this.initialOrderId}/.json`, body);
    }


}