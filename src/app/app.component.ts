import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() mojePole: string = 'Task Manager';
  public activeTab;

  constructor(private router: Router) {}

  activeUrl(newTab: string): void {
    this.activeTab = newTab;
    this.router.navigate([newTab]);
  }
}
