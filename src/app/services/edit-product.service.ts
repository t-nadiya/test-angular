import { IProduct } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EditProductService {
    selectedProduct: IProduct | undefined;
    constructor() { }

    selectProduct(product: IProduct) {
        this.selectedProduct = product;
    }

    getProduct() {
        return this.selectedProduct;
    }
}