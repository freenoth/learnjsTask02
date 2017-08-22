import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Api, Airport} from '../api';

@Component({
  selector: 'app-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.css']
})
export class AirListComponent implements OnInit {
  private _api: Api;
  public _filter = 'All';

  public airports: IAirportData[];
  public continents: string[];

  public current_airport: Airport;

  @Output()
  public choose_current = new EventEmitter();

  constructor() {
    this._api = new Api();
    this.continents = ['All', 'Europe', 'Asia', 'North America', 'South America', 'Africa', 'Australia'];
  }

  public ngOnInit() {
    this.airports = this._api.getAirportsData();
    this.current_airport = new Airport(this.airports[0]);
    this.choose_current.emit(this.current_airport);
  }

  public itemChoosed(data: IAirportData) {
    this.current_airport = new Airport(data);
    this.choose_current.emit(this.current_airport);
  }

  public filter(continent: string): void {
    this._filter = continent;
  }
}
