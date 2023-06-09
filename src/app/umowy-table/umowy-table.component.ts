import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-umowa-table',
  templateUrl: './umowy-table.component.html',
  styleUrls: ['./umowy-table.component.scss']
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
