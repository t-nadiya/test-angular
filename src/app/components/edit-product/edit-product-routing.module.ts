import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product.component';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [{ path: '', component: EditProductComponent, canDeactivate: [UnsavedGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductRoutingModule { }
