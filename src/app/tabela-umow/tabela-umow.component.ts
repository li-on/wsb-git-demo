import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Klient } from '../klient.model';
import { MOCK_KLIENCI, MOCK_KLIENCI_HEADERS, MOCK_KLIENCI_COLUMNS } from '../mock-klienci';

@Component({
  selector: 'app-tabela-umow',
  templateUrl: './tabela-umow.component.html',
  styleUrls: ['./tabela-umow.component.css']
})
export class TabelaUmowComponent {
  klienci: Klient[] = MOCK_KLIENCI;
  headers: string[] = MOCK_KLIENCI_HEADERS;
  columns: string[] = MOCK_KLIENCI_COLUMNS;

  onKlientClick(klient: Klient) {
    // Obsługa kliknięcia klienta
    console.log('Kliknięto klienta:', klient);
  }
}

@Component({
  selector: 'app-umowy-table',
  templateUrl: './umowy-table.component.html',
  styleUrls: ['./umowy-table.component.css']
})
export class UmowyTableComponent {
  umowaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.umowaForm = this.formBuilder.group({
      IDKKlienta: [''],
      NazwaKlienta: [''],
      dataOdZawarcia: [''],
      dataDoZawarcia: [''],
      czasZawarcia: [''],
      rodzajUmowy: [''],
      uwagi: [''],
      email: [''],
      systemObslugiZgloszenLink: [''],
      limitKar: [''],
      warunkiWypowiedzenia: [''],
      karaZaWypowiedzenie: [''],
      koordynatorUmowy: this.formBuilder.group({
        imie: [''],
        nazwisko: [''],
        telefon: [''],
        email: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.umowaForm.value);
    // Przetwarzanie danych, np. wysłanie ich do serwera
  }
}

