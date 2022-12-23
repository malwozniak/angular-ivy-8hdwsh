import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../../interface/task';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todoForm: FormGroup;
  tasks: Observable<Task[]>;
  selected: any;
  selectedList: any = [];
  events: string[] = [];
  constructor(private service: ListService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      task: ['', Validators.required],
    });
    this.tasks = this.service.tasks;
  }
  addItem() {
    this.service.create({
      title: this.todoForm.controls.task.value,
      completed: false,
    });

    this.todoForm.reset();
  }

  onDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  archive(taskId: number) {
    this.service.sendToArchive(taskId);
  }
  completeTask(event: any, index) {
    this.service.updateList(index, event.checked);
  }
  deleteItem(taskId: number) {
    this.service.delete(taskId);
  }
}
