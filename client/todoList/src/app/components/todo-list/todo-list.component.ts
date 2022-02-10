import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoSummary } from 'src/app/models';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskId!: string;
  todo!: Todo;
  form!: FormGroup;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  todoSummary: TodoSummary[] = [];

  ngOnInit(): void {
    this.todoService.getTitleSummary()
    .then(data => this.todoSummary = data)
  }

}
