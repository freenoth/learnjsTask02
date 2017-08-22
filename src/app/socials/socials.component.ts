import {Component, Input, OnChanges} from '@angular/core';
import {Api, SocialInfo} from '../api';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnChanges {
  private _api: Api;

  @Input()
  public username: string;

  public social_info: SocialInfo;

  constructor() {
    this._api = new Api();
  }

  ngOnChanges() {
    this.social_info = new SocialInfo(this._api.getSocialInfo(this.username));
  }

}
