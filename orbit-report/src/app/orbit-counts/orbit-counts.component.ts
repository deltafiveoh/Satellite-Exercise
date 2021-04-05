import { Component, OnInit, Input } from '@angular/core';
import { SatelliteComponent } from '../satellite/satellite.component';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: SatelliteComponent[];

  satelliteTypes: string[] = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  constructor() { }

  ngOnInit() {
  }

  numSats(satType: string): number {
    if (satType === 'Total') {
      return this.satellites.length;
    } else {
      let count: number = 0;
      for (let i in this.satellites) {
        if (this.satellites[i].type === satType) {
          count++;
        }
      }
      return count;
    }
  }
}
