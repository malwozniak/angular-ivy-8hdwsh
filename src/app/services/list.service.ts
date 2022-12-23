import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private taskslist = new BehaviorSubject<Task[]>([]);
  private data: {
    tasks: Task[];
  } = {
    tasks: [],
  };
  readonly tasks = this.taskslist.asObservable();
  private itemId = 0;
  constructor() {}

  create(task: Task) {
    this.itemId = this.itemId + 1;
    task.id = this.itemId;
    this.data.tasks.push(task);
    this.taskslist.next(Object.assign({}, this.data).tasks);
  }

  sendToArchive(todoId: number) {}
  updateList(index, checked) {
    let completedTask = this.data.tasks.splice(index, 1)[0];
    completedTask.completed = checked;
    if (!completedTask.completed) {
      this.data.tasks.push(completedTask);
    } else {
      this.data.tasks.unshift(completedTask);
    }
    this.taskslist.next(Object.assign({}, this.data.tasks));
  }

  delete(todoId: number) {
    this.data.tasks.forEach((t, i) => {
      if (t.id === todoId) {
        this.data.tasks.splice(i, 1);
      }
    });

    this.taskslist.next(Object.assign({}, this.data).tasks);
  }
}
