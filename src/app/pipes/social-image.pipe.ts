import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'socialImage'
})
export class SocialImagePipe implements PipeTransform {
  private _image_path = 'assets/socials/';
  private _default_image = 'assets/unknown.jpg';

  public transform(image: string, args?: any): string {
    if (!image) {
      return this._default_image;
    }
    return this._image_path.concat(image);
  }

}
