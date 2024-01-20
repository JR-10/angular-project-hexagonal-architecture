import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ProductRepository } from '../../domain/repositories/product/product.repository';
import { ProductAdapterService } from '../adapters/product/product-adapter.service';
import {
  IProduct,
  IResponseDataProduct,
} from '../../domain/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryImpl extends ProductRepository {
  constructor(private productAdapterService: ProductAdapterService) {
    super();
  }

  /**
   * @description Repository implementation
   * @returns
   */
  getAllProductsRepository(): Observable<IResponseDataProduct> {
    return this.productAdapterService.getAllProductsService().pipe(
      switchMap((responseBD) => {
        const dataTatan: IResponseDataProduct = {
          pagination: responseBD.pagination,
          data: [],
        };
        responseBD.data!.forEach((content: IProduct) => {
          dataTatan.data!.push(content);
        });
        return of(dataTatan);
      })
    );
  }
}
