import { IProduct } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productsServise: ProductService) { }
  // product: IProduct[] | undefined;
  product!: IProduct

  ngOnInit(): void {

    this.getProduct()

  }

  getProduct(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    this.productsServise.getProduct(id).subscribe(product => this.product = product)
  }

}
