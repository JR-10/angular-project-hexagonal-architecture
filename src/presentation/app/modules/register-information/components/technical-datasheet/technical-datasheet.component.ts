import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProductUseCase } from '../../../../../../application/useCases/product/product.usecase';
import { CONSTANTS_TECHNICAL_DATASHEET } from '../../constants';
import { ColumnTable } from '../../../../../../domain/models/general.models';
import { ProductModel } from '../../../../../../domain/models/product/product-model';
import { ResponseDataProductModel } from '../../../../../../domain/models/product/product-response-model';

// campo fechas
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-technical-datasheet',
  standalone: true,
  imports: [
    CommonModule,

    // Formularios
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // fechas
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './technical-datasheet.component.html',
  styleUrls: ['./technical-datasheet.component.scss'],
})
export class TechnicalDatasheetComponent {
  dataResponse: ProductModel[] = [];

  // estructura del formulario
  formFilters = new FormGroup({
    product: new FormControl(''),
    manager: new FormControl(''),
    state: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  });

  displayedColumns: string[] = [/*'id',*/ 'product', 'nameManager', 'modificationDate', 'state', 'actions'];
  // displayedColumns: ColumnTable[] = [];
  dataSource: MatTableDataSource<ProductModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productUseCase: ProductUseCase) {
    this.getPodutsExample();
  }

  send(): void {
    console.log(this.formFilters.value);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * @description Metodo para hacer busqueda rapida en la tabla
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * @description Metodo para obtener la data para alimentar la tabla
   */
  getPodutsExample() {
    this.productUseCase.execute({}).subscribe({
      next: (resp: ResponseDataProductModel) => {
        // this.displayedColumns = CONSTANTS_TECHNICAL_DATASHEET.DISPLAYED_COLUMNS;
        this.dataSource = new MatTableDataSource(resp.data);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
