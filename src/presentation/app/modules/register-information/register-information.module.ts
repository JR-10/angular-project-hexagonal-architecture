import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterInformationRoutingModule } from './register-information-routing.module';
import { ProductRepository } from '../../../../domain/repositories/product/product.repository';
import { ProductRepositoryImpl } from '../../../../infraestructure/ports/product.repository.impl';
import { ProductUseCase } from '../../../../application/useCases/product/product.usecase';
import { HttpClientModule } from '@angular/common/http';


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
    { provide: ProductRepository, useClass: ProductRepositoryImpl },
  ]
})
export class RegisterInformationModule { }
