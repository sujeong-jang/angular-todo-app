import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newText: string ="";
  todos: Todo[];

  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: true, text: '공부하기' }
    ];
   }

  ngOnInit(): void {
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(text) {
    this.todos.push({
      done: false,
      text: text
    });
  }
}
