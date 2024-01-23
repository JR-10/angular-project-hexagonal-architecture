import { Observable } from 'rxjs';
import { ProductRepository } from '../../../domain/repositories/product/product.repository';
import { UseCase } from '../../../base/use-case';
import { ResponseDataProductModel } from '../../../domain/models/product/product-response-model';

export class ProductUseCase implements UseCase<{}, ResponseDataProductModel> {
  constructor(private productRepository: ProductRepository) {}
  execute(params: {}): Observable<ResponseDataProductModel> {
    return this.productRepository.getAllProductsRepository(params);
  }
}
