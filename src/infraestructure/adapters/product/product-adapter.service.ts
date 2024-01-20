import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseDataProduct } from '../../../domain/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapterService {

  private URL_BACK: string;

  constructor(private http: HttpClient) {
    this.URL_BACK = 'http://localhost:3040';
  }
  getAllProductsService(): Observable<IResponseDataProduct> {
    const url = `${this.URL_BACK}/gic/products/all`;
    return this.http.get<IResponseDataProduct>(url)
  }
}
