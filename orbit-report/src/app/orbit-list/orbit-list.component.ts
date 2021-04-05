import { Component, OnInit, Input } from '@angular/core';
import { SatelliteComponent } from '../satellite/satellite.component';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: SatelliteComponent[];

  constructor() {
   }

  ngOnInit() {
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: SatelliteComponent, b: SatelliteComponent): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

 satelliteProperties(sat: object){
      return Object.keys(sat);
}
}
