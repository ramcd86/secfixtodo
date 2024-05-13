import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TodoCreationComponent } from './todo-creation.component';
import { InputComponent } from '../input/input.component';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

describe('TodoCreationComponent', () => {
  let component: TodoCreationComponent;
  let fixture: ComponentFixture<TodoCreationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoCreationComponent,
        InputComponent,
        DropDownComponent,
        ButtonComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit todo when createTodo is called with valid inputs', () => {
    spyOn(component.emitTodo, 'emit');
    component.todoTitle = 'Sample Todo';
    component.priority = 'High';
    component.createTodo();
    expect(component.emitTodo.emit).toHaveBeenCalledWith({
      title: 'Sample Todo',
      priority: 'High',
    });
  });

  it('should not emit todo when createTodo is called with empty todo title', () => {
    spyOn(component.emitTodo, 'emit');
    component.priority = 'Medium';
    component.createTodo();
    expect(component.emitTodo.emit).not.toHaveBeenCalled();
  });

  it('should not emit todo when createTodo is called with empty priority', () => {
    spyOn(component.emitTodo, 'emit');
    component.todoTitle = 'Another Todo';
    component.createTodo();
    expect(component.emitTodo.emit).not.toHaveBeenCalled();
  });

  it('should not emit todo when createTodo is called with both empty todo title and priority', () => {
    spyOn(component.emitTodo, 'emit');
    component.createTodo();
    expect(component.emitTodo.emit).not.toHaveBeenCalled();
  });
});
