export interface Klient {
    idkKlienta: number;
    nazwaKlienta: string;
    dataZawarcia: string;
    dataZakonczenia: string;
    czasZawarcia?: string;
    rodzajUmowy?: string;
    uwagi?: string;
    email?: string;
    linkDoZgloszen?: string;
    limitKar?: string;
    warunkiWypowiedzenia?: string;
    karaZaWypowiedzenie?: string;
    koordynatorUmowy?: KoordynatorUmowy;
  }
  
  export interface KoordynatorUmowy {
    imie: string;
    nazwisko: string;
    telefon: string;
    email: string;
  }
  