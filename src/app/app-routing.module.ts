import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ProduktComponent } from './produkt/produkt.component';
import { ProduktyComponent } from './produkty/produkty.component';

const routes: Routes = [
  {path: 'produkty', component:ProduktyComponent},
  {path: 'produkt/:id', component:ProduktComponent},
  {path: '**', component:StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
