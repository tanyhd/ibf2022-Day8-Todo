import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit, AfterViewInit{

  form: FormGroup = new FormGroup({});
  taskId!: string;
  todo!: Todo;

  constructor(private fb: FormBuilder, private todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.getTodo()
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(""),
      taskDescription: this.fb.control(""),
      priority: this.fb.control("")
    })
    this.taskId = this.activatedRoute.snapshot.params["taskId"];
    this.todoService.getTodo(this.taskId).then(data => this.todo = data as Todo)
  }

  getTodo() {
    this.form = this.fb.group({
      title: this.fb.control(this.todo.title),
      taskDescription: this.fb.control(this.todo.taskDescription),
      priority: this.fb.control(this.todo.priority)
    })
  }



  updateTodo() {

  }

}
