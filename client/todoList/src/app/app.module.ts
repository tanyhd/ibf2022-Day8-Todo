import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

const appRoot = [
  { path: '', component:TodoListComponent},
  { path: 'addList', component:AddListComponent},
  { path: 'editList/:taskId', component:EditListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EditListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
