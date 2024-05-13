import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';

export const TODO_FEATURE_KEY = 'todo-store';

export enum TodoStatus {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
}

export interface Todo {
  id: number;
  name?: string;
  priority?: string;
  status: TodoStatus;
}

export interface TodoState {
  todoList: Todo[];
}

export const initialState: TodoState = {
  todoList: [],
};

const todoReducer = createReducer(
  initialState,
  on(actions.getTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList,
  })),
  on(actions.changeTodoName, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === todo.id ? { ...el, name: todo.name } : el
    ),
  })),
  on(actions.addTodo, (state, { name, priority }) => ({
    ...state,
    todoList: [
      ...state.todoList,
      {
        id: state.todoList.length + 1,
        name,
        priority,
        status: TodoStatus.InProgress,
      },
    ],
  })),
  on(actions.changeTodoStatus, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === todo.id ? { ...el, status: todo.status } : el
    ),
  })),
  on(actions.removeTodo, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.filter((el) => el.id !== todo.id),
  }))
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
