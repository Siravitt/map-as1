import { Component, EventEmitter } from '@angular/core';
import ILocate from '../models/locate.model';
import { LocatorService } from '../services/locator.service';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent {
  locate: ILocate = {
    latitude: null,
    longitude: null,
  };

  constructor(
    private locatorService: LocatorService,
    private mapService: MapService
  ) {
    this.locatorService.onLocate.subscribe((data) => {
      this.locate = { ...data };
    });
  }

  onSubmit(value: ILocate) {
    this.mapService.clearGraphic();
    this.locatorService.setLocate = value;
    this.locatorService.emitLocate();
  }
}
