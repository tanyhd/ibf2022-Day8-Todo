import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo, TodoSummary } from 'src/app/models';
import { TodoService } from 'src/app/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(''),
      taskDescription: this.fb.control(''),
      priority: this.fb.control('')
    })
  }

  submitTODO() {

    let taskId = uuidv4()
    let addTodo = new Todo(
      taskId,
      this.form.value.title,
      this.form.value.taskDescription,
      this.form.value.priority
    )
    this.todoService.addTodo(addTodo);
    console.log(addTodo);
    this.form.reset();
  }
}


