import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortthelist',
  pure: false
})
export class SortListPipe implements PipeTransform{
  transform(value: any, propname: string): any{
    return value.sort((a,b) => {
      if(a[propname] > b[propname]){
        return 1;
      } else {
        return -1;
      }
    });
  }


}
