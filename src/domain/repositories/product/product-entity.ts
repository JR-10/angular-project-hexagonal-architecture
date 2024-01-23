import { IPagination } from 'src/domain/models/general.models';
import { ProductModel } from '../../models/product/product-model';

export interface ResponseDataProductEntity {
  data?: ProductModel[];
  pagination?: IPagination;
}
