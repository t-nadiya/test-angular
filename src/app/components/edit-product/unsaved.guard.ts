import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProductComponent } from './edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<EditProductComponent> {
  canDeactivate(component: EditProductComponent) {

    // if (component.hasUnsavedData()) {
    //   if (confirm('You have some unsaved data. Want to leave?')) {
    //     return true;
    //   } else {
    //     return false
    //   }
    // }
    // return true

    console.log(component.form.dirty);

    if (component.form.dirty) {
      if (confirm('You have some unsaved data. Want to leave?')) {
        return true;
      } else {
        return false
      }
    }
    return true

  }
}

