import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string, maxLength: number): string {
    if (!text || text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + '...';
    }
  }

}
