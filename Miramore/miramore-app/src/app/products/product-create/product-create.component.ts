import { Component, OnInit } from '@angular/core';
import { ProductCreate } from '../models/product-create';
import { ProductService } from '../product-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  bindingModel : ProductCreate
  constructor(
    private productService : ProductService,
    private toastr : ToastrService,
    private router : Router
  ) { 
    this.bindingModel = new ProductCreate('', '', '',0);
  }

  ngOnInit() {
  }

  create() {
    this.productService.createProduct(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Product created!', 'Success');
        this.router.navigate(['/product/list']);
      })
  }

}
