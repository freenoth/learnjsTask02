import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'airportImage'
})
export class AirportImagePipe implements PipeTransform {
  private _image_path = '/assets/airports/';
  private _default_image = '/assets/unknown.jpg';

  public transform(image: string, args?: any): string {
    if (!image) {
      return this._default_image;
    }
    return this._image_path.concat(image);
  }
}
