import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() {}

  public generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
