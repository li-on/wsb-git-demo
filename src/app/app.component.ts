import { Component } from '@angular/core';
import { UmowyTableComponent } from './umowy-table/umowy-table.component';
import { TabelaUmowComponent } from './tabela-umow/tabela-umow.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsb-git-demo';
  isMenuCollapsed = false;
}
