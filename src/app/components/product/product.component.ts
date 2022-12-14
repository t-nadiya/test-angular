
import { Component, Input, OnInit } from '@angular/core';
import { ServicesModalService } from '../../services/modal.service';
import { IProduct } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // details: boolean = false

  constructor(public modalService: ServicesModalService, private cartService: CartService) { }

  ngOnInit(): void {
  }
  @Input() product !: IProduct

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

}

