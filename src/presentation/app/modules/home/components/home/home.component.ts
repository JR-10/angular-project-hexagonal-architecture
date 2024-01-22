import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../../../../../../domain/repositories/product/product.repository';
import { IProduct, IResponseDataProduct } from 'src/domain/models/product/product';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: IProduct[] = [];
  constructor(private productRepository: ProductRepository){
    this.loadData();
  }

  ngOnInit(): void {
      console.log('Componente Home');
  }

  loadData(): void {
    this.productRepository.getAllProductsRepository().subscribe({
      next: (data: IResponseDataProduct) => {
        console.log('valor de la data: ', data.data)
      },
      error: (error) => {
        console.error('Error al cargar las tareas:', error);
      },
    });
  }

}
