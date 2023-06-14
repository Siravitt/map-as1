import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from '../services/map.service';
import { LocatorService } from '../services/locator.service';

import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Polygon from '@arcgis/core/geometry/Polygon';

import { identify } from '@arcgis/core/rest/identify';
import IdentifyParameters from '@arcgis/core/rest/support/IdentifyParameters';

import PopupTemplate from '@arcgis/core/PopupTemplate.js';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css'],
})
export class Assignment4Component implements OnInit {
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

    this.mapService.mapView?.on('click', (event) => {
      this.mapService.clearGraphic();
      this.locatorService.setLocate = {
        latitude: event.mapPoint.latitude,
        longitude: event.mapPoint.longitude,
      };
      this.locatorService.emitLocate();

      const identifyURL =
        'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer';

      let params = new IdentifyParameters();
      params.tolerance = 3;
      params.layerIds = [3];
      params.returnGeometry = true;

      params.geometry = event.mapPoint;
      if (this.mapService.mapView) {
        params.mapExtent = this.mapService.mapView?.extent;
      }

      identify(identifyURL, params)
        .then((res) => {
          const result = res.results;
          return result.map((el: any) => {
            el.feature.popupTemplate = new PopupTemplate({
              title: el.feature.attributes.STATE_NAME,
              content: `<p>Population : ${el.feature.attributes.POP2007}</p><p>Area : ${el.feature.attributes.Shape_Area}</p>`,
            });
            const marker = new SimpleFillSymbol({
              color: [226, 119, 40, 0.5],
              outline: {
                color: [255, 255, 255],
                width: 2,
              },
            });
            const polygon = new Polygon({
              rings: el.feature.geometry.rings,
              spatialReference: el.feature.geometry.spatialReference,
            })

            const pointGraphic = new Graphic({
              geometry: polygon,
              symbol: marker,
            });
    
            this.mapService.mapView?.graphics.add(pointGraphic);

            return el.feature;
          });
        })
        .then((res: any) => {
          if (res.length > 0) {
            this.mapService.mapView?.popup.open({
              features: res,
              location: event.mapPoint,
            });
          }
        });
    });
  }
}
