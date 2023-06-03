import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-definicje',
  templateUrl: './definicje.component.html',
  styleUrls: ['./definicje.component.scss']
})
export class DefinicjeComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      teczkaFinansowa: [''],
      dataOd: [''],
      dataDo: [''],
      godzinyPracySerwisu: [''],
      dniObslugi: [''],
      definicjaBleduKrytycznego: [''],
      czasReakcjiBleduKrytycznego: [''],
      czasRealizacjiBleduKrytycznego: [''],
      karaZaDzienOpoznienia: ['']
    });
  
  }

  onSubmit() {
    
    console.log(this.form.value);
  }
}
