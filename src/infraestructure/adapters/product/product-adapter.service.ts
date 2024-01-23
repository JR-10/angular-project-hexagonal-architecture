import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductRepository } from '../../../domain/repositories/product/product.repository';
import { ProductImplemetationRepositoryMapper } from '../../mappers/product-repository.mapper';
import { ResponseDataProductModel } from 'src/domain/models/product/product-response-model';
import { ResponseDataProductEntity } from '../../../domain/repositories/product/product-entity';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapterService extends ProductRepository {
  productMapper = new ProductImplemetationRepositoryMapper();
  private URL_BACK: string;

  constructor(private http: HttpClient) {
    super();
    this.URL_BACK = 'http://localhost:3040';
  }

  override getAllProductsRepository(params: {}): Observable<ResponseDataProductModel> {
    const url = `${this.URL_BACK}/gic/products/all`;
    return this.http.get<ResponseDataProductEntity>(url)
      .pipe(map(this.productMapper.mapFrom));
  }
}
