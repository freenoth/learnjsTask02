import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weatherTemp'
})
export class WeatherTempPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const sign = value >= 0 ? '+' : '';
    return sign.concat(value.toString());
  }

}
