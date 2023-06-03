import { Klient } from './klient.model';

export const MOCK_KLIENCI: Klient[] = [
  { idkKlienta: 1, nazwaKlienta: 'Klient 1', dataZawarcia: '2022-01-01', dataZakonczenia: '2023-01-01' },
  { idkKlienta: 2, nazwaKlienta: 'Klient 2', dataZawarcia: '2022-02-01', dataZakonczenia: '2023-02-01' },
  { idkKlienta: 3, nazwaKlienta: 'Klient 3', dataZawarcia: '2022-03-01', dataZakonczenia: '2023-03-01' },
  { idkKlienta: 4, nazwaKlienta: 'Klient 4', dataZawarcia: '2022-04-01', dataZakonczenia: '2023-04-01' },
];

export const MOCK_KLIENCI_HEADERS: string[] = ['IDK Klienta', 'Nazwa Klienta', 'Data Zawarcia', 'Data Zakonczenia'];

export const MOCK_KLIENCI_COLUMNS: string[] = ['idkKlienta', 'nazwaKlienta', 'dataZawarcia', 'dataZakonczenia'];
