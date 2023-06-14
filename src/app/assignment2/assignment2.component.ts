import { Component } from '@angular/core';
import { LocatorService } from '../services/locator.service';
import ILocate from '../models/locate.model';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  constructor(private locatorService: LocatorService) {
    this.locatorService.onLocate.subscribe((data) => {
      const newData = new CustomPoint();
      newData.onLocate.latitude = data.latitude;
      newData.onLocate.longitude = data.longitude;
      console.log(newData);
    });
  }
}

export class CustomPoint {
  onLocate: ILocate = {
    latitude: null,
    longitude: null,
  };
}
