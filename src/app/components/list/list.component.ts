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
  task: Task;
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
      archived: false,
    });

    //this.todoForm.reset();
  }
  isChecked(e) {
    this.task.completed = e.target.checked;
  }
  onDate(event: MatDatepickerInputEvent<Date>) {
    console.log('event', event.value);
    const stringified = JSON.stringify(event.value);
    const dob = stringified.substring(1, 11);
    this.events.push(`${dob}`);
  }

  completeTask(event: any, archived) {
    if (event.target.checked) {
      archived = true;
      this.service.post(this.task).subscribe((data) => {
        this.task = data;
      });
    } else {
      console.log('unchecked');
    }
  }
  deleteItem(taskId: number) {
    this.service.delete(taskId);
  }
}
