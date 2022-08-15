import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct
  constructor(private route: ActivatedRoute, private productsServise: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    this.productsServise.getProduct(id).subscribe(product => this.product = product)
  }
}
