import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';

const routes: Routes = [
  { path: '**', component: ClientsComponent },
  { path: 'dodaj', component: ClientsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
