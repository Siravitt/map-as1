import { Component, EventEmitter } from '@angular/core';
import CustomPoint from '../models/locate.model';
import { LocatorService } from '../services/locator.service';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent {
  locate: CustomPoint = {
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

  onSubmit(value: CustomPoint) {
    this.mapService.clearGraphic();
    this.locatorService.setLocate = value;
    this.locatorService.emitLocate();
  }
}
