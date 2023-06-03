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
onClickOpis(){
this.opis= !this.opis
}

foto = false
onClickFoto(){
this.foto= !this.foto
}

}


