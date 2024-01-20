import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadComponent: () =>
      import(
        './components/technical-datasheet/technical-datasheet.component'
      ).then((m) => m.TechnicalDatasheetComponent),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInformationRoutingModule {}
