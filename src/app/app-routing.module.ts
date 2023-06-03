import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { KorespondencjaComponent } from './korespondencja/korespondencja.component';
import { PraceDodatkoweComponent } from './prace-dodatkowe/prace-dodatkowe.component';
import { ClientsComponent } from './clients/clients.component';
import { DefinicjeComponent } from './definicje/definicje.component';
import { TabelaUmowComponent } from './tabela-umow/tabela-umow.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { KontaktyComponent } from './kontakty/kontakty.component';

const routes: Routes = [
  {path: 'start', component:StartComponent},
  {path: 'klienci', component: ClientsDetailComponent},
  {path: 'klienci/nowy', component: ClientsDetailComponent},
  {path: 'korespondencja', component:KorespondencjaComponent},
  {path: 'kontakty', component:KontaktyComponent},
  {path: 'dodatkowe', component:PraceDodatkoweComponent},
  {path: 'sla', component:DefinicjeComponent},
  {path: 'umowy', component:TabelaUmowComponent},
  {path: '**', component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
