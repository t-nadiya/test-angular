import { IProduct } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductsForEdit'
})
export class FilterProductsForEditPipe implements PipeTransform {

  transform(products: IProduct[], id: number): IProduct[] {
    return products.filter(product => product.id === id)
  }

}
