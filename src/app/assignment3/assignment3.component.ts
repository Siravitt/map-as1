import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import { MapService } from '../services/map.service';
import { LocatorService } from '../services/locator.service';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  @ViewChild('mapPanel', { static: true })
  mapPanel!: ElementRef<HTMLDivElement>;

  constructor(
    private mapService: MapService,
    private locatorService: LocatorService
  ) {
    this.locatorService.onLocate.subscribe((data) => {
      const marker = new SimpleMarkerSymbol({
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      });

      if (data.latitude && data.longitude) {
        const point = new Point({
          longitude: data.longitude,
          latitude: data.latitude,
        });

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: marker,
        });

        this.mapService.mapView?.graphics.add(pointGraphic);
        this.mapService.mapView?.goTo([data.longitude, data.latitude]);
      }
    });
  }

  ngOnInit(): void {
    this.mapService.createMap(this.mapPanel.nativeElement);

    // this.mapService.mapView?.on('click', (event) => {
    //   this.mapService.clearGraphic()
    //   this.locatorService.setLocate = {
    //     latitude: event.mapPoint.latitude,
    //     longitude: event.mapPoint.longitude
    //   };
    //   this.locatorService.emitLocate();
    // });
  }
}
