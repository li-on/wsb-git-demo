import { Component } from '@angular/core';
import { Produkt } from '../interface/produkt';
import { ProduktyService } from '../service/produkty.service';

@Component({
  selector: 'app-produkty',
  templateUrl: './produkty.component.html',
  styleUrls: ['./produkty.component.scss']
})
export class ProduktyComponent {

  dane?: Produkt[];

  constructor(private produktyService: ProduktyService) {}

  ngOnInit(){
    this.produktyService.getProdukty().subscribe(
      wynik => {
        this.dane = wynik;
      }
    );
  }

}
