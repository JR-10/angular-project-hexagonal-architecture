import { IPagination } from '../general.models';
import { ProductModel } from './product-model';

export interface ResponseDataProductModel {
  data?: ProductModel[];
  pagination?: IPagination;
}
