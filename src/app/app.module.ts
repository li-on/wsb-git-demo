import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { UmowyTableComponent } from './umowy-table/umowy-table.component';
import { TabelaUmowComponent } from './tabela-umow/tabela-umow.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UmowyTableComponent,
    TabelaUmowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
