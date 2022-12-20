import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../../interface/todo';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todoForm: FormGroup;
  todos: Observable<Todo[]>;
  selected: any;
  selectedList: any = [];
  constructor(private service: ListService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
    this.todos = this.service.todos;
  }
  addItem() {
    this.service.create({
      value: this.todoForm.controls.todo.value,
      completed: false,
    });
    this.todoForm.reset();
  }
  completeTask(event: any, index) {
    this.service.updateList(index, event.checked);
  }
  deleteItem(todoId: number) {
    this.service.delete(todoId);
  }
}
