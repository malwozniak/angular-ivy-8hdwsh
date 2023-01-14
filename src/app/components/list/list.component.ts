import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../../interface/task';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todoForm: FormGroup;
  tasks: Observable<Task[]>;
  task: Task;
  selected: boolean = false;
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
      archived: false,
    });

    //this.todoForm.reset();
  }
  isChecked(e: MatCheckboxChange) {
    if (e.checked) {
      this.selected = true;
      this.service.put(this.task.id).subscribe((data) => {
        this.task.completed = this.selected;
        console.log(this.task.completed);
        this.task = data;
      });
    } else {
      console.log(Error);
    }
  }
  onDate(event: MatDatepickerInputEvent<Date>) {
    console.log('event', event.value);
    const stringified = JSON.stringify(event.value);
    const dob = stringified.substring(1, 11);
    this.events.push(`${dob}`);
  }

  completeTask(event: any, ar) {
    this.service.get().subscribe((data) => {
      console.log(data);
    });
  }
  deleteItem(taskId) {
    this.service.deleteTask(taskId);
  }
}
