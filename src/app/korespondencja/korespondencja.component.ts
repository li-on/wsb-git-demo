import { Component } from '@angular/core';

@Component({
  selector: 'app-korespondencja',
  templateUrl: './korespondencja.component.html',
  styleUrls: ['./korespondencja.component.scss']
})
export class KorespondencjaComponent {
  korespondencje: any[] = []
  
  korespondencjaObj = {
    date:'',
    type:'',
    canal:'',
    name:'',
    desc:'',
    priority:'',
    status:'',
  }


  onSubmit() {
    let obj = this.korespondencjaObj
    this.korespondencje.push(obj)
  }

}
