import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prace-dodatkowe',
  templateUrl: './prace-dodatkowe.component.html',
  styleUrls: ['./prace-dodatkowe.component.scss']
})
export class PraceDodatkoweComponent {
  praceDodatkowe = [
    {
      id: 1111,
      podsystem: 'Podsystem A',
      nazwaOferty: 'Nazwa A',
      dataZamowienia: '2023-04-10',
      dataRealizacji: '2023-05-05',
      dataOdbioru: '2023-05-15',
      liczbaGodzinSprzedanych: 40,
      liczbaGodzinWykonanych: 40,
      kwotaNetto: '5000 PLN',
      aktywnosc: 'modyfikacja',
      miesiacRozliczenia: 'maj',
      kwartal: 'II',
      rok: 2023
    },
    
      {
        id: 1112,
        podsystem: 'Podsystem B',
        nazwaOferty: 'Nazwa B',
        dataZamowienia: '2023-06-01',
        dataRealizacji: '2023-06-10',
        dataOdbioru: '2023-06-15',
        liczbaGodzinSprzedanych: 20,
        liczbaGodzinWykonanych: 35,
        kwotaNetto: '5000 PLN',
        aktywnosc: 'modyfikacja',
        miesiacRozliczenia: 'maj',
        kwartal: 'II',
        rok: 2022
      },
      {
        id: 1113,
        podsystem: 'Podsystem C',
        nazwaOferty: 'Nazwa C',
        dataZamowienia: '2021-12-01',
        dataRealizacji: '2023-01-10',
        dataOdbioru: '2023-01-15',
        liczbaGodzinSprzedanych: 30,
        liczbaGodzinWykonanych: 35,
        kwotaNetto: '4000 PLN',
        aktywnosc: 'modyfikacja',
        miesiacRozliczenia: 'marzec',
        kwartal: 'I',
        rok: 2023
      },
      {
        id: 1114,
        podsystem: 'Podsystem D',
        nazwaOferty: 'Nazwa D',
        dataZamowienia: '2023-09-01',
        dataRealizacji: '2023-09-10',
        dataOdbioru: '2023-09-15',
        liczbaGodzinSprzedanych: 100,
        liczbaGodzinWykonanych: 20,
        kwotaNetto: '4000 PLN',
        aktywnosc: 'modyfikacja',
        miesiacRozliczenia: 'grudzien',
        kwartal: 'III',
        rok: 2023
      }
  ];

}
