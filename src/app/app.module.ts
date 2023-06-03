import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { KontaktyComponent } from './kontakty/kontakty.component';
import { JedenKontaktComponent } from './jeden-kontakt/jeden-kontakt.component';
import { UmowyTableComponent } from './umowy-table/umowy-table.component';
import { TabelaUmowComponent } from './tabela-umow/tabela-umow.component';
import { KorespondencjaComponent } from './korespondencja/korespondencja.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefinicjeComponent } from './definicje/definicje.component';
import { PraceDodatkoweComponent } from './prace-dodatkowe/prace-dodatkowe.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';

@NgModule({
  declarations: [
    KorespondencjaComponent,
    AppComponent,
    StartComponent,
    KontaktyComponent,
    JedenKontaktComponent,
    UmowyTableComponent,
    TabelaUmowComponent
    DefinicjeComponent,
    PraceDodatkoweComponent,
    ClientsComponent,
    ClientsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
