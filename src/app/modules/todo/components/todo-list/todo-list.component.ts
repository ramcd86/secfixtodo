import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Todo } from 'src/app/modules/store/todo/todo.reducer';
import { getAllTodos } from 'src/app/modules/store/todo/todo.selectors';
import { TodoUpdate } from '../todo-item/todo-item.component';

export enum selectedTodoStatusList {
  ALL = 'ALL',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() emitTodo: EventEmitter<TodoUpdate> = new EventEmitter<TodoUpdate>();

  allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));

  // There's probably some way to make this more efficient, but time is against us.
  allToDos: Todo[][] = [];
  allTodosPage = 0;
  allTodosNumber = 0;
  inProgressTodos: Todo[][] = [];
  inProgressTodosPage = 0;
  inProgressTodosNumber = 0;
  completedTodos: Todo[][] = [];
  completedTodosPage = 0;
  completedTodosNumber = 0;
  allTodosSelected: boolean = true;
  inProgressSelected: boolean = false;
  completedSelected: boolean = false;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.allTodos$
      .pipe(
        tap((todos) => {
          this.allToDos = this.chunkTodos(todos);
          this.allTodosNumber = todos.length;
        }),
        tap((todos) => {
          const inProgressTodos = todos.filter(
            (todo) => todo.status === 'IN_PROGRESS'
          );
          this.inProgressTodos = this.chunkTodos(inProgressTodos);
          this.inProgressTodosNumber = inProgressTodos.length;
        }),
        tap((todos) => {
          const completedTodos = todos.filter(
            (todo) => todo.status === 'COMPLETE'
          );
          this.completedTodos = this.chunkTodos(completedTodos);
          this.completedTodosNumber = completedTodos.length;
        })
      )
      .subscribe();
  }

  chunkTodos(array: any[]): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += 5) {
      chunks.push(array.slice(i, i + 5));
    }
    return chunks;
  }

  handlePageChange(paginationType: string, $event: number) {
    switch (paginationType) {
      case selectedTodoStatusList.ALL:
        this.allTodosPage = $event;
        break;
      case selectedTodoStatusList.IN_PROGRESS:
        this.inProgressTodosPage = $event;
        break;
      case selectedTodoStatusList.COMPLETED:
        this.completedTodosPage = $event;
        break;
    }
  }

  setSelectedTodoStatus(status: string) {
    switch (status) {
      case selectedTodoStatusList.ALL:
        this.allTodosSelected = true;
        this.inProgressSelected = false;
        this.completedSelected = false;
        break;
      case selectedTodoStatusList.IN_PROGRESS:
        this.allTodosSelected = false;
        this.inProgressSelected = true;
        this.completedSelected = false;
        break;
      case selectedTodoStatusList.COMPLETED:
        this.allTodosSelected = false;
        this.inProgressSelected = false;
        this.completedSelected = true;
        break;
    }
  }
}
