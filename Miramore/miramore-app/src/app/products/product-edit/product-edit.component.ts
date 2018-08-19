import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductCreate } from '../models/product-create';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})


export class ProductEditComponent implements OnInit {
  id : string;
  bindingModel : ProductCreate;

  constructor(
    private productService : ProductService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id] : this.bindingModel
    }
    
    this.productService.editProduct(body)
      .subscribe((data) => {
        this.toastr.success('Product edited!', 'Success!');
        this.router.navigate(['/product/list']);
      })
  }

}

