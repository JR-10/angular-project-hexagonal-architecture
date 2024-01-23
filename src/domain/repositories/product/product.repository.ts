import { Observable } from 'rxjs';
import { ResponseDataProductModel } from '../../models/product/product-response-model';


export abstract class ProductRepository {
  abstract getAllProductsRepository(params:{}): Observable<ResponseDataProductModel>;
}
