import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../../products/models/product-list';
import { OrderService } from '../order-service';
import { ProductService } from '../../products/product-service';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {

  products : Object[] = [{}]
  constructor(
    private ordertService : OrderService,
    private productService : ProductService
  ) { }

  ngOnInit() {
     this.ordertService.getMyOrder()
      .subscribe(data => {
        if (data['productIds']) {
          for (const id of data['productIds']) {
            this.productService.getById(id)
            .subscribe(productInfo => {
              this.products.push(productInfo)
            })
          }
        }
      })
  }

}
