import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../../../../../../domain/repositories/product/product.repository';
import { MatButtonModule } from '@angular/material/button';
import { ResponseDataProductModel } from '../../../../../../domain/models/product/product-response-model';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  constructor(private productRepository: ProductRepository){
    this.loadData();
  }

  ngOnInit(): void {
      console.log('Componente Prueba');
  }

  loadData(): void {
    this.productRepository.getAllProductsRepository({}).subscribe({
      next: (data: ResponseDataProductModel) => {
        console.log('valor de la data: ', data.data)
      },
      error: (error) => {
        console.error('Error al cargar las tareas:', error);
      },
    });
  }

}
