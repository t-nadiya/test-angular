import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './components/productslist/productslist.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'edit-product', loadChildren: () => import('./components/edit-product/edit-product.module').then(m => m.EditProductModule) },
  { path: 'store', component: ProductslistComponent, },
  { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) },
  { path: 'store/product-details/:productId', loadChildren: () => import('./components/product/product-details/product-details.module').then(m => m.ProductDetailsModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
