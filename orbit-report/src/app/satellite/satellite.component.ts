import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {

  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) { 
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
  }

  ngOnInit() {
  }

  shouldShowWarning(): boolean {
    return this.type.toLowerCase() === "space debris";
 }

}
