import { Component, Input } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent {
  constructor(private service: RandomService) {}
  @Input() max: any;
  showit: boolean;
  randomNumber: any;

  min: number = 1;
  ngOnInit() {}

  generateRandomNumbers() {
    this.showit = true;
    this.randomNumber = this.service.generateRandomNumber(
      this.min,
      Number(this.max)
    );
  }
}
