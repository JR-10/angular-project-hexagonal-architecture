import { ResponseDataProductEntity } from '../../domain/repositories/product/product-entity';
import { ResponseDataProductModel } from '../../domain/models/product/product-response-model';
import { Mapper } from '../../base/mapper';


export class ProductImplemetationRepositoryMapper extends Mapper<ResponseDataProductEntity, ResponseDataProductModel> {

  mapFrom(param: ResponseDataProductEntity): ResponseDataProductModel {
    return {
      data: param.data,
      pagination: param.pagination,
    };
  }

  mapTo(param: ResponseDataProductModel): ResponseDataProductEntity {
    return {
      data: param.data,
      pagination: param.pagination,
    };
  }
}
