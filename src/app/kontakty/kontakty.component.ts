import { Component, Input } from '@angular/core';
import { Kontakt } from '../kontaktInterface';
import { KONTAKTY } from '../mock-kontakty';

@Component({
  selector: 'app-kontakty',
  templateUrl: './kontakty.component.html',
  styleUrls: ['./kontakty.component.scss']
})
export class KontaktyComponent {

kontakty = KONTAKTY;

opis = false
onClick(){
this.opis= !this.opis
}
}


