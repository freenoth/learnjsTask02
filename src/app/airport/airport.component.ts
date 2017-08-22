import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Api, Airport} from '../api';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  private _api: Api;

  public airport: Airport;

  @Input()
  public airport_data: IAirportData;

  @Input()
  public is_colored: boolean;

  @Output()
  public is_clicked = new EventEmitter();

  constructor() {
    this._api = new Api();
  }

  public ngOnInit() {
    this.airport = new Airport(this.airport_data);
  }

  public itemClicked() {
    this.is_clicked.emit(this.airport_data);
  }

  public getSocialImage() {
    const social_info = this._api.getSocialInfo(this.airport.social_name);
    return social_info ? social_info.getImage() : null;
  }
}
