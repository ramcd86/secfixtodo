import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.css'],
})
export class TodoCreationComponent implements OnInit {
  todoTitle: string = '';
  priority: string = '';
  @Output() emitTodo: EventEmitter<{ title: string; priority: string }> =
    new EventEmitter<{ title: string; priority: string }>();

  constructor() {}

  ngOnInit(): void {}

  setTodoTitle(title: string) {
    this.todoTitle = title;
  }

  setPriority(priority: string) {
    this.priority = priority;
  }

  createTodo() {
    if (!this.todoTitle || !this.priority) return;
    this.emitTodo.emit({ title: this.todoTitle, priority: this.priority });
  }
}
