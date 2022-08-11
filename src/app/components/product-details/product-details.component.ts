import { Component, OnInit, Input } from '@angular/core';
import { ServicesModalService } from '../../services/services.modal.service';
import { IProduct } from '../../models/product'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public modalService: ServicesModalService) { }

  ngOnInit(): void {
  }
  @Input() product !: IProduct
}
