import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { OrderService } from '../orders/order-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownLi : string = "nav-item dropdown";
  dropdownMenu : string = "dropdown-menu";
  constructor(
    private authService : AuthService,
    private orderService : OrderService) { }

  ngOnInit() {
  }

  expand() {
    this.dropdownLi.endsWith('show') 
    ? this.dropdownLi = "nav-item dropdown" 
    : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
    ? this.dropdownMenu = "dropdown-menu"
    : this.dropdownMenu = "dropdown-menu show";
  }

  logout() {
    this.authService.logout()
  }

  myCredantials(){
    this.orderService.getMyOrder()
      .subscribe(data => {
      })
    
  }
}
