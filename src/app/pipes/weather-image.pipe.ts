import {Pipe, PipeTransform} from '@angular/core';
import {WeatherTypes} from '../api';

@Pipe({
  name: 'weatherImage'
})
export class WeatherImagePipe implements PipeTransform {
  private _image_path = '/assets/weather/';
  private _type_cast: Map<number, string>;

  constructor() {
    this._type_cast = new Map();
    this._type_cast.set(WeatherTypes.sun, 'w1.png');
    this._type_cast.set(WeatherTypes.sun_cloud, 'w2.png');
    this._type_cast.set(WeatherTypes.cloud, 'w3.png');
    this._type_cast.set(WeatherTypes.rain, 'w4.png');
    this._type_cast.set(WeatherTypes.storm, 'w5.png');
  }

  transform(type: number, args?: any): string {
    return this._image_path.concat(this._type_cast.get(type));
  }

}
