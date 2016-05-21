import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { ITodo } from './todo';
import { IClient } from '../../clients/client';
import { TodoService } from './todos.service';
import { ClientService } from '../../clients/clients.service';

import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'todo-add',
  templateUrl: 'app/user/dashboard/todos/todo-add.component.html',
  directives: [FORM_DIRECTIVES]
})

export class TodoAdd implements OnInit{  
    todo: ITodo;
    newtodo: string[];
    todos: any;
    clients: IClient;
    status: string[] = [
        'Pre-signed',
        'Active',
        'Pending',
        'Closed',
        'Cancelled'
    ];
    source: string[] = [
        'Friend',
        'Family',
        'Lead Website',
        'Other'
    ];
    progress: string[] = [
        'Not Yet Started',
        'In-Progress',
        'Complete'
    ];
    
  constructor(private todoService: TodoService, 
              private clientService: ClientService){ }
  
  ngOnInit(){
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }
  
   addtodo(form: any){
     this.todo = form;     
     this.todoService.addTodo(this.todo)
    //  .subscribe(newtodo => this.newtodo = newtodo);
    .then(
      todos => this.todos = todos,
      error => console.log(error));

   }

}
