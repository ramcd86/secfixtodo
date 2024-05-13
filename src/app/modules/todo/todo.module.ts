import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from './components/input/input.component';
import { TodoCreationComponent } from './components/todo-creation/todo-creation.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { ButtonComponent } from './components/button/button.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SmallButtonComponent } from './components/small-button/small-button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RangePipe } from './range.pipe';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    TodoComponent,
    InputComponent,
    TodoCreationComponent,
    DropDownComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    SmallButtonComponent,
    PaginatorComponent,
    RangePipe,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
