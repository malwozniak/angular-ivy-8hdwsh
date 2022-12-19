import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> {{mojePole}}!</h1>`,
})
export class HelloComponent {
  @Input() mojePole: string;
}
