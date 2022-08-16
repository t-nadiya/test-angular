
import { ProductService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {

  constructor(private productsServise: ProductService) { }
  products: IProduct[] = []
  loading = false;
  title = '';

  ngOnInit(): void {
    this.loading = true;
    this.productsServise.getProducts().subscribe((products) => {
      this.products = products;
      this.loading = false;
    })
  }


}
