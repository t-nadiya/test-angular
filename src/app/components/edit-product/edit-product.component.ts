import { IProduct } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { EditProductService } from '../../services/edit-product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  submitted = false;
  product: IProduct | undefined;
  isDirty = true;

  constructor(private editProductService: EditProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.product = this.editProductService.getProduct()

  }
  onSubmit() { this.submitted = true, this.isDirty = false }

}

