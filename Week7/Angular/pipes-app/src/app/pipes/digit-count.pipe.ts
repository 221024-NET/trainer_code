import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitCount'
})
export class DigitCountPipe implements PipeTransform {

  transform(num: number): number {
    return num.toString().length;
  }

}
