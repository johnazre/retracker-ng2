import { Component } from "@angular/core";
import 'rxjs/Rx';
import { IClient } from './client';


@Component({
  selector: 'simplre-clients',
  templateUrl: 'app/user/clients/clients.component.html'
 })

export class ClientsComponent {
  pageTitle: string = "Clients Page"
}
