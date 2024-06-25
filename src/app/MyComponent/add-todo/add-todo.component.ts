import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  title: string | undefined;
  description: string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: any): void {
    if (form.valid) {
      const todo: Todo = {
        sno: 8,
        title: this.title!,
        description: this.description!,
        active: true
      };
      this.todoAdd.emit(todo);

      
      this.title = '';
      this.description = '';

      
      form.resetForm();
    }
  }
}
