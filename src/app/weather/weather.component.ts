import {Component, OnChanges, Input} from '@angular/core';
import {Api, WeatherInfo} from '../api';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  private _api: Api;

  @Input()
  public current_city: string;

  public current_weather: WeatherInfo;

  constructor() {
    this._api = new Api();
  }

  public ngOnChanges() {
    this.current_weather = this._api.getWeatherInfo(this.current_city);
  }

}
