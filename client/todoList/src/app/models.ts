
export class Todo {
  constructor(
    public taskId: string,
    public title: string,
    public taskDescription: string,
    public priority: string
  ) {}
}

export interface TodoSummary {
  taskId: string;
  title: string;
}

