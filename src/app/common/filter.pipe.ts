import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return JSON.stringify(it).toLowerCase().includes(searchText);
    });
  }

  // transform(value: any, args?: any): any {
  //
  //   if(!value)return null;
  //   if(!args)return value;
  //
  //   args = args.toLowerCase();
  //
  //   return value.filter(function(item){
  //     return JSON.stringify(item).toLowerCase().includes(args);
  //   });
  // }
}
