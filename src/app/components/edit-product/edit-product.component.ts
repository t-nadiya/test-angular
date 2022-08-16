import { IProduct } from './../../models/product';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EditProductService } from '../../services/edit-product.service'

import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  submitted: boolean | undefined
  product: IProduct | undefined;

  // @Input() product !: IProduct
  @ViewChild('productForm')
  form!: NgForm

  constructor(private route: ActivatedRoute, private productsServise: ProductService) { }
  // form!: FormGroup
  // constructor(
  //   private editProductService: EditProductService,
  //   private fb: FormBuilder,
  //   private route: ActivatedRoute,
  //   private productsServise: ProductService
  // ) {
  //   this.form = this.fb.group({
  //     title: new FormControl(this.product?.title, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
  //     description: new FormControl(this.product?.description, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
  //   })

  // }

  ngOnInit(): void {
    this.submitted = false;
    this.getProduct()
    // this.product = this.editProductService.getProduct()

  }
  onSubmit() { this.submitted = true }
  hasUnsavedData() {
    return this.form.dirty
  }
  getProduct(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    this.productsServise.getProduct(id).subscribe(product => {
      this.product = product;
      console.log(this.product);
    })
  }

}

