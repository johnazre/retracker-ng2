import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { ITodo } from './todo';
import { TodoService } from './todos.service';


@Component({
  selector: "retracker-todos",
  templateUrl: 'app/user/dashboard/todos/todos.component.html',
  providers: [TodoService]
})

export class TodoComponent implements OnInit {
  todos: string[];

  constructor(private todoService: TodoService){ }


  ngOnInit(){
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  pageTitle: string = "Todos Page"
}
