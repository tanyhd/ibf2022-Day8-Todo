import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { Todo, TodoSummary } from "./models";

@Injectable()
export class TodoService extends Dexie {

  todo: Dexie.Table<Todo, string>;

  constructor() {
    super('todo-db')
    this.version(1).stores({
      todo: 'taskId'
    });
    this.todo = this.table('todo');
  }

  addTodo(todo: Todo): Promise<string> {
    return this.todo.add(todo)
  }


  getTitleSummary(): Promise<TodoSummary[]> {
    return this.todo.toArray()
    .then(data =>
      data.map(t => ({taskId: t.taskId, title: t.title} as TodoSummary)))
  }

  getTodo(taskId: string) {
    return this.todo.get(taskId);
  }

  updateTodo(todo: Todo): Promise<string> {
    return this.todo.put(todo);
  }

  deleteTodo(taskId: string) {
    return this.todo.delete(taskId);
  }

}
