import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo): void {
    console.log('onclick happened');
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
  }
}
