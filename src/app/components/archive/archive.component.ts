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
  @Input() taska: any[];
  ngOnInit() {}
  getItem(taskId) {
    this.service.get().subscribe(
      (response) => (this.results = response),
      (error) => console.log(error)
    );
  }

  deleteItem(todoId: number) {
    this.service.delete(todoId);
  }
}
