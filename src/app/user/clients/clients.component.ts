import { Component, OnInit } from "@angular/core";
import 'rxjs/Rx';
import { IClient } from './client';
import { ClientService } from './clients.service';
import { ClientAdd } from './client-add.component'

@Component({
  selector: 'simplre-clients',
  templateUrl: 'app/user/clients/clients.component.html',
  providers: [ClientService],
  directives: [ClientAdd]
 })

export class ClientsComponent implements OnInit {
  clients: string[];

  constructor(private clientService: ClientService){ }


  ngOnInit(){
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }

  pageTitle: string = "Clients Page"
}
