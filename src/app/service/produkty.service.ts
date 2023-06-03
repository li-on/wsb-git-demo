import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produkt } from '../interface/produkt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduktyService {

  ROOT_URL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getProdukty(): Observable<Produkt[]>{
    return this.http.get<Produkt[]>(this.ROOT_URL+"produkty");
  }

}
