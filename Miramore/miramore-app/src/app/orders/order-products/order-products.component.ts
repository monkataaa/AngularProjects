import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../../products/models/product-list';
import { OrderService } from '../order-service';
import { ProductService } from '../../products/product-service';
import { AuthService } from '../../auth/auth-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {

  products : Object[] = [{}]
  noProducts : boolean
  emptyProductIds : string [] = []
  constructor(
    private orderService : OrderService,
    private productService : ProductService,
    private authService : AuthService,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit() {
    console.log('productite sa ', this.products.length);
     this.orderService.getMyOrder()
      .subscribe(data => {
        if (data['productIds']) {
          for (const id of data['productIds']) {
            this.productService.getById(id)
            .subscribe(productInfo => {
              this.products.push(productInfo)
              console.log('productite sa ', this.products.length);
            })
          }
        } else{
          this.noProducts = true
        }
      })
  }

  submitOrder(){
    this.authService.makeEmptyOrder()
      .subscribe((data) => {
        this.orderService.myProductsIds = this.emptyProductIds
        this.orderService.initialOrderId = data['name']
        console.log('productite v koli4kata sa ', this.orderService.myProductsIds);
        this.toastr.success("Order submited ! \nWe'll conctact you soon!", 'Success');
        this.router.navigate(['/product/list']);
      })
  }

}
