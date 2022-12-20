import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() mojePole: string = 'Task Manager';
}
