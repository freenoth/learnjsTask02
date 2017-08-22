import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import { AirportComponent } from './airport/airport.component';
import { AirListComponent } from './air-list/air-list.component';
import { AirportFilterPipe } from './pipes/airport-filter.pipe';
import { AirportImagePipe } from './pipes/airport-image.pipe';
import { SocialImagePipe } from './pipes/social-image.pipe';
import { SocialsComponent } from './socials/socials.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherTempPipe } from './pipes/weather-temp.pipe';
import { WeatherImagePipe } from './pipes/weather-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AirListComponent,
    AirportFilterPipe,
    AirportImagePipe,
    SocialImagePipe,
    SocialsComponent,
    WeatherComponent,
    WeatherTempPipe,
    WeatherImagePipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
