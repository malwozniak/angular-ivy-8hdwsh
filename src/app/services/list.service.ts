import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interface/task';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  tasks = this.taskslist.asObservable();
  private itemId = 0;

  ROOT_URL = 'https://lab13.zecer.wi.zut.edu.pl/api/wm32863';

  constructor(private http: HttpClient) {}

  create(task: Task) {
    this.itemId = this.itemId + 1;
    task.id = this.itemId;
    this.data.tasks.push(task);
    this.taskslist.next(Object.assign({}, this.data).tasks);
    console.log(task);
    this.post(task).subscribe((data) => {
      //  this.task.archived = true;
      task = data;
      // console.log(Error);
    });
  }

  public get(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(this.ROOT_URL);
  }

  public post(task) {
    return this.http.post(this.ROOT_URL, task);
  }

  public put(task): Observable<any> {
    return this.http.put(this.ROOT_URL, task.id);
  }
  public deleteTask(task: Task): Observable<any> {
    return this.http.delete(this.ROOT_URL + task.id);
  }
  getTasks(taskId) {
    let params = new HttpParams().set('id', taskId);

    this.http.get<Task[]>(this.ROOT_URL, { params }).subscribe((dataa) => {
      this.data.tasks = dataa;
    });
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

  // deleteLs(taskId: number) {
  //   this.data.tasks.forEach((t, i) => {
  //     if (t.id === taskId) {
  //       this.data.tasks.splice(i, 1);
  //     }
  //   });

  //   this.taskslist.next(Object.assign({}, this.data).tasks);
  // }
}
