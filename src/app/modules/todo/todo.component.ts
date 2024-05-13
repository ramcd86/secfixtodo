import { Component, OnInit } from '@angular/core';
import { filter, Observable, take } from 'rxjs';
import {
  getTodos,
  addTodo,
  removeTodo,
  changeTodoStatus,
  changeTodoName,
} from '../store/todo/todo.actions';
import { select, Store } from '@ngrx/store';
import { getAllTodos } from '../store/todo/todo.selectors';
import { TodoStatus, Todo } from '../store/todo/todo.reducer';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TodoUpdate } from './components/todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  statusEnum = TodoStatus;

  newTodo = new FormControl('', [Validators.required]);

  allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));

  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }

  updateTodo(todoUpdate: TodoUpdate) {
    switch (todoUpdate.updateType) {
      case 'status':
        this.changeTodoStatus(todoUpdate.todo);
        break;
      case 'name':
        this.changeTodoName(todoUpdate.todo);
        break;
      case 'remove':
        this.removeTodo(todoUpdate.todo);
        break;
    }
  }

  addNewTodo(event: { title: string; priority: string }) {
    this.store.dispatch(
      addTodo({ name: event.title, priority: event.priority })
    );
  }

  changeTodoName(todo: Todo) {
    this.store.dispatch(changeTodoName({ todo }));
  }

  changeTodoStatus(todo: Todo) {
    this.store.dispatch(changeTodoStatus({ todo }));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }));
  }
}
