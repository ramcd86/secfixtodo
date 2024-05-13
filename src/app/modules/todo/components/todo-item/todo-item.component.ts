import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo, TodoStatus } from 'src/app/modules/store/todo/todo.reducer';

export interface TodoUpdate {
  updateType: 'status' | 'name' | 'remove';
  todo: Todo;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem?: Todo;
  @Output() emitTodo: EventEmitter<TodoUpdate> = new EventEmitter<TodoUpdate>();

  newTodo: Todo = {
    id: 0,
    name: '',
    priority: '',
    status: TodoStatus.InProgress,
  };

  showEdit = false;
  editingEnabled = false;

  constructor() {}

  ngOnInit(): void {
    this.newTodo = this.todoItem ? { ...this.todoItem } : this.newTodo;
  }

  toggleTodoStatus() {
    this.newTodo.status =
      this.newTodo.status === TodoStatus.InProgress
        ? TodoStatus.Complete
        : TodoStatus.InProgress;
    this.emitTodo.emit({
      updateType: 'status',
      todo: this.newTodo,
    });
  }

  flagTodoForEdit() {
    this.editingEnabled = true;
  }

  confirmEdit() {
    this.newTodo.name = this.newTodo?.name?.trim();
    this.editingEnabled = false;
    this.emitTodo.emit({
      updateType: 'name',
      todo: this.newTodo,
    });
  }

  removeTodo() {
    this.emitTodo.emit({
      updateType: 'remove',
      todo: this.newTodo,
    });
  }
}
