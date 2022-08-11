import { IProduct } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], title: string): IProduct[] {
    return products.filter(product => product.title.toLocaleLowerCase().startsWith(title.toLocaleLowerCase()))
  }

}
