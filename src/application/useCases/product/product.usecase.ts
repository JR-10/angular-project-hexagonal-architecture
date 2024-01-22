import { Observable } from 'rxjs';
import { ProductRepository } from '../../../domain/repositories/product/product.repository';
import { IResponseDataProduct } from 'src/domain/models/product/product';

export class ProductUseCase {

  constructor(private productRepository: ProductRepository) {}

  excecute():Observable<IResponseDataProduct>{
    return this.productRepository.getAllProductsRepository();
  }
}
