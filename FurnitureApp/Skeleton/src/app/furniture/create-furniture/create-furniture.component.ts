import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModel } from '../models/create-furniture.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel : CreateFurnitureModel
  constructor(private furnitureSerive : FurnitureService) {
    this.bindingModel = new CreateFurnitureModel('','',0,'',1,'','')
   }

  ngOnInit() {
  }

  create(){
    console.log(this.bindingModel);
    this.furnitureSerive.createFurniture(this.bindingModel)
      .subscribe()
  }

  validateYear(){
    return this.bindingModel.year >= 1970 && this.bindingModel.year <= 2050
  }


}
