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
  readonly tasks = this.taskslist.asObservable();
  private itemId = 0;
  isLoaded: any;

  readonly ROOT_URL = 'https://lab13.zecer.wi.zut.edu.pl/api/wm32863';

  posts;

  constructor(private http: HttpClient) {}

  create(task: Task) {
    this.itemId = this.itemId + 1;
    task.id = this.itemId;
    this.data.tasks.push(task);
    this.taskslist.next(Object.assign({}, this.data).tasks);
    console.log(task);
  }

  public get(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(this.ROOT_URL);
  }

  public post(task: Task): Observable<any> {
    return this.http.post(this.ROOT_URL, task);
  }

  public put(task: Task): Observable<any> {
    return this.http.put(this.ROOT_URL, task);
  }
  getPosts(taskId) {
    let params = new HttpParams().set('userId', taskId);

    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.isLoaded.next(false);
    //////////////////////////////

    this.http
      .get<Task[]>(this.ROOT_URL + '/tasks', { params, headers })
      .subscribe((data) => {
        this.posts = data;
        this.isLoaded.next(true);
      });
  }
  public deleteTask(task: Task): Observable<any> {
    return this.http.delete('https://lab13.zecer.wi.zut.edu.pl/api/');
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
