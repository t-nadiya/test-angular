import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProductComponent } from './edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<EditProductComponent> {
  canDeactivate(component: EditProductComponent) {
    if (component.isDirty) {
      return window.confirm('You have some unsaved data. Want to leave?')
    }

    return true
  }

}
