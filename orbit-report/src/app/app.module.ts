import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SatelliteComponent } from './satellite/satellite.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    SatelliteComponent,
    OrbitListComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
