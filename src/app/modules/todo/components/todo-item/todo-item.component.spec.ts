import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { InputComponent } from '../input/input.component';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Todo, TodoStatus } from 'src/app/modules/store/todo/todo.reducer';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoItemComponent,
        InputComponent,
        DropDownComponent,
        ButtonComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todoItem = {
      id: 1,
      name: 'Test Todo',
      priority: 'High',
      status: TodoStatus.InProgress,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle todo status', () => {
    spyOn(component.emitTodo, 'emit').and.callThrough();
    component.toggleTodoStatus();
    expect(component.emitTodo.emit).toHaveBeenCalledWith({
      updateType: 'status',
      todo: {
        id: 1,
        name: 'Test Todo',
        priority: 'High',
        status: TodoStatus.Complete,
      },
    });
  });

  it('should flag todo for edit', () => {
    component.flagTodoForEdit();
    expect(component.editingEnabled).toBeTrue();
  });

  it('should confirm edit', () => {
    spyOn(component.emitTodo, 'emit').and.callThrough();
    component.confirmEdit();
    expect(component.emitTodo.emit).toHaveBeenCalledWith({
      updateType: 'name',
      todo: {
        id: 1,
        name: 'Test Todo',
        priority: 'High',
        status: TodoStatus.InProgress,
      },
    });
    expect(component.editingEnabled).toBeFalse();
  });

  it('should remove todo', () => {
    spyOn(component.emitTodo, 'emit').and.callThrough();
    component.removeTodo();
    expect(component.emitTodo.emit).toHaveBeenCalledWith({
      updateType: 'remove',
      todo: {
        id: 1,
        name: 'Test Todo',
        priority: 'High',
        status: TodoStatus.InProgress,
      },
    });
  });
});
