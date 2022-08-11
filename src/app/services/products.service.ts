import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    url = 'https://fakestoreapi.com/products'
    options = { params: new HttpParams().append('limit', 10) }
    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url, this.options)
    }
}
