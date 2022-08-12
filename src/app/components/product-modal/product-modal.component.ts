import { Component, OnInit, Input } from '@angular/core';
import { ServicesModalService } from '../../services/modal.service';
import { IProduct } from '../../models/product'

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  constructor(public modalService: ServicesModalService) { }

  ngOnInit(): void {
  }
  @Input() product !: IProduct
}
