import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'airportFilter'
})
export class AirportFilterPipe implements PipeTransform {

  public transform(airports_data: IAirportData[], continent: string): IAirportData[] {
    if (continent === 'All') {
      return airports_data;
    }

    return airports_data.filter(function (airport_data: IAirportData) {
      return airport_data.continent === continent;
    });
  }
}
