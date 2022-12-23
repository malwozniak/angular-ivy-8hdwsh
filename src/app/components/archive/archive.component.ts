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
@Input() taska: any[];
  ngOnInit() {}
  deleteItem(todoId: number) {
    this.service.delete(todoId);
  }
}
