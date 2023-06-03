import { Component } from '@angular/core';
import { Klient } from '../klient.model';
import { MOCK_KLIENCI, MOCK_KLIENCI_HEADERS, MOCK_KLIENCI_COLUMNS } from '../mock-klienci';

@Component({
  selector: 'app-tabela-umow',
  templateUrl: './tabela-umow.component.html',
  styleUrls: ['./tabela-umow.component.scss']
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
