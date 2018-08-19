import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product-service';
import { ProductList } from '../models/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Observable<ProductList[]>
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts()
  }

}
