import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  products: IProduct[] = []
  selectedProduct: IProduct | undefined;

  constructor(
    private productsService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products
      console.log(this.products)
    })
  }

  // selectProduct(product: IProduct) {
  //   this.editProductService.selectProduct(product)
  // }

}
