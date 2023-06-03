import { Component } from '@angular/core';
import { CLIENTS } from '../mock-clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
addClient() {
throw new Error('Method not implemented.');
}
  clients = CLIENTS;
}
