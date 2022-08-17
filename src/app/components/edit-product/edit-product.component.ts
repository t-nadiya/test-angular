import { IProduct } from './../../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  products: IProduct[] = []
  product!: IProduct
  id!: number

  public form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {

  }


  // @ViewChild('productForm')
  // form!: NgForm
  // constructor(private route: ActivatedRoute, private productsServise: ProductService) { }
  // hasUnsavedData() {
  //   return this.form.dirty
  // }

  ngOnInit(): void {
    this.getProducts()
  }
  createForm() {
    return this.form = this.fb.group({
      title: new FormControl(this.product.title, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
      description: new FormControl(this.product?.description, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
    })
  }
  onSubmit() { this.form.reset() };

  getProducts(): void {
    this.productsService.getProducts().subscribe(products => this.products = products)
  }
  setProductId(id: number) {
    this.id = id
    this.getProduct()
  }
  getProduct(): void {
    this.productsService.getProduct(this.id).subscribe(product => {
      this.product = product;
      this.createForm()
    })
  }
  // editProduct(product: IProduct) {

  //   console.log(this.product);
  //   console.log(this.form.get('title')?.value);


  // }

}


