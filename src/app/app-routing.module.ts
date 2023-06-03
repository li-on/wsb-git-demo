import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { KorespondencjaComponent } from './korespondencja/korespondencja.component';

const routes: Routes = [
  {path: 'start', component:StartComponent},
  {path: 'korespondencja', component:KorespondencjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
