import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productKeys'
})
export class ProductKeysPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
