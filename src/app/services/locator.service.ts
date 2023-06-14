import { EventEmitter, Injectable } from '@angular/core';
import CustomPoint from '../models/locate.model';

@Injectable({
  providedIn: 'root',
})
export class LocatorService {
  onLocate = new EventEmitter<CustomPoint>();
  private locate: CustomPoint = {
    latitude: null,
    longitude: null,
  };

  constructor() {}

  emitLocate() {
    this.onLocate.emit(this.locate);
  }

  get getLocate() {
    return this.locate;
  }

  set setLocate(value: CustomPoint) {
    this.locate = { ...value };
  }
}
