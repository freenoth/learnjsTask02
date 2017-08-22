import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '2nd homework for learning JavaScript';

  public current_airport: IAirportData;

  constructor() {
  }

  public change_current(data: IAirportData) {
    this.current_airport = data;
  }

}
