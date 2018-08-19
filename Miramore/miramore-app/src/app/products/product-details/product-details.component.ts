import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductList } from '../models/product-list';
import { ProductService } from '../product-service';
import { OrderService } from '../../orders/order-service';
import { OrderCreate } from '../models/order-create';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : ProductList;
  id : string;
  order : OrderCreate
  orderIds : string[] = []
  constructor(
    private productService : ProductService,
    private orderService : OrderService,
    private authService : AuthService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
  ) {
    // this.order = new OrderCreate(this.authService.getUserEmail(), this.id)
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getById(this.id)
      .subscribe(data => {
        this.product = data;
      })
  }

  delete() {
    this.productService.deleteProduct(this.id)
      .subscribe((data) => {
        this.toastr.success('Product deleted!', 'Success!');
        this.router.navigate(['/product/list']);
      })
  }

  purchase(){
    this.orderIds = this.orderService.myProductsIds
    this.orderIds.push(this.id)
//    console.log("this.orderIds =",this.orderIds);
    this.order = new OrderCreate(this.authService.getUserEmail(), this.orderIds)
    console.log("this order", this.order);
    this.orderService.buyProduct(this.order)
      .subscribe(response => {
        console.log('res sled buyproduct =',response);
        this.orderService.myProductsIds = response['productIds']
        this.toastr.success('Product added to cart!', 'Success');
        this.router.navigate(['/product/list']);
      })
  }

}

