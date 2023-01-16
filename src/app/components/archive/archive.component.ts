import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../interface/task';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  constructor(private service: ListService) {}
  tasks: Observable<Task[]>;

  public results;
  ngOnInit() {
    this.service.get().subscribe(
      (response: any) => (this.results = response),
      (error) => console.log(error)
    );
  }

  deleteItem(taskId) {
    console.log(taskId);
    this.service.deleteTask(taskId).subscribe(() => {
      this.service.deleteLs(taskId);
      console.log('user deleted');
    });
  }
}
