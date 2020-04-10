import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Clothes } from '../clothes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  clothesFromCart: Clothes[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getClothesFromCart()
  }

  getClothesFromCart(): void {
    this.cartService.getClothesFromCart().subscribe( clothes => this.clothesFromCart = clothes)
  }

  deleteClothesFromCart(clothes: Clothes) {
    this.cartService.deleteClothesFromCart(clothes)
  }
}