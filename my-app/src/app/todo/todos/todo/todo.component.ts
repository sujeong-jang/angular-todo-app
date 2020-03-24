import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: './todos.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  todos: {
    done: boolean,
    text: string
  }[];

  constructor() {
    this.todos = [
      {done: false, text: '운동하기'},
      {done: true, text: '공부하기'}
    ];
   }

  ngOnInit(): void {
  }

}
