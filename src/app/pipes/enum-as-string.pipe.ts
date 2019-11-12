import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumAsString'
})
export class EnumAsStringPipe implements PipeTransform {

  transform(value: number, enumType: any): any {
    console.log(enumType);
    return enumType[value];
  }

}
