import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interface/todo';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  constructor(private service: ListService) {}
  todos: Observable<Todo[]>;

  ngOnInit() {}
  deleteItem(todoId: number) {
    this.service.delete(todoId);
  }
}
