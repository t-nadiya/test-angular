
import { Component, Input, OnInit } from '@angular/core';
import { ServicesModalService } from 'src/app/services/services.modal.service';
import { IProduct } from './../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public modalService: ServicesModalService) { }

  ngOnInit(): void {
  }
  @Input() product !: IProduct
  // details: boolean = false

}

