import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return environment.apiUrl + 'api/' + args[0] + '/image/' + value;
  }

}
