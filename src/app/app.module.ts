import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FilterProductsForEditPipe } from './pipes/filter-products-for-edit.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    ProductslistComponent,
    NotFoundComponent,
    FilterProductsPipe,
    FilterProductsForEditPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

