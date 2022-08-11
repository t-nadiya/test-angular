import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductslistComponent } from './components/productslist/productslist.component';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  // { path: 'store', component: ProductslistComponent, data: { product: "products[0]" } },
  { path: 'store', component: ProductslistComponent, },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }