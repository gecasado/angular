import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idBook'
})
export class IdBookPipe implements PipeTransform {

  transform(value:string): string {
    let result = `Ref-${value}`;
    return result;
  }

}
