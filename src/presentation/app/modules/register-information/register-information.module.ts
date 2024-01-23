import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterInformationRoutingModule } from './register-information-routing.module';
import { ProductRepository } from '../../../../domain/repositories/product/product.repository';
import { ProductUseCase } from '../../../../application/useCases/product/product.usecase';
import { HttpClientModule } from '@angular/common/http';
import { ProductAdapterService } from '../../../../infraestructure/adapters/product/product-adapter.service';


const productUseCaseFactory = (productRepo: ProductRepository) => new ProductUseCase(productRepo);
export const ProductUseCaseProvider = {
  provide: ProductUseCase,
  useFactory: productUseCaseFactory,
  deps: [ProductRepository]
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterInformationRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductUseCaseProvider,
    { provide: ProductRepository, useClass: ProductAdapterService },
  ]
})
export class RegisterInformationModule { }
