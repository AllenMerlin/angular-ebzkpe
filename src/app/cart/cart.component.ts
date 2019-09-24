import { Component, OnInit } from '@angular/core';
//引入cartService服务
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //定义商品属性
  items;
  constructor(
    //注入cartService
    private cartService:CartService,
  ) { 
    this.items = cartService.getItems();
  }

  ngOnInit() {
  }

}