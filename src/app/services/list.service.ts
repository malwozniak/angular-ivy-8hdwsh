import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interface/task';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  create(task: Task) {
    this.itemId = this.itemId + 1;
    task.id = this.itemId;
    this.data.tasks.push(task);
    this.taskslist.next(Object.assign({}, this.data).tasks);
    console.log(task)
  }


// public get(archived = false): Observable<Task[]> { 

//   return this.http.get<Task>('https://lab13.zecer.wi.zut.edu.pl/api/', archived);
//  }

public post(task: Task): Observable<any> { 
   task.archived = true;
  return this.http.post('https://lab13.zecer.wi.zut.edu.pl/api/', task);


 }

public put(task: Task): Observable<any> {
  task.archived = true;
  return this.http.put('https://lab13.zecer.wi.zut.edu.pl/api/', task)
 }


public deleteTask(task: Task): Observable<any> {  

    return this.http.delete('https://lab13.zecer.wi.zut.edu.pl/api/')
  }

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


  delete(taskId: number) {
    this.data.tasks.forEach((t, i) => {
      if (t.id === taskId) {
        this.data.tasks.splice(i, 1);
      }
    });

    this.taskslist.next(Object.assign({}, this.data).tasks);
  }
}

