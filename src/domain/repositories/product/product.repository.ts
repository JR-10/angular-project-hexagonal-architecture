import { Observable } from 'rxjs';

import { IResponseDataProduct } from '../../models/product/product';

export abstract class ProductRepository {
  abstract getAllProductsRepository(): Observable<IResponseDataProduct>;

}
