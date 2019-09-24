import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products'; //使用外部数据
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product;
  constructor( 
    private route: ActivatedRoute,
    private cartService:CartService,
  ) {
   
   }
   //添加购物车
  addToCart(product){
    window.alert("已经添加到购物车");
    this.cartService.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

}