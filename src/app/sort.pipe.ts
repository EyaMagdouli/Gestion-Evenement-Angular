import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], column: string, direction: string): any[] {
    if (!array || !column || !direction) {
      return array;
    }

    return array.sort((a, b) => {
  
      const aValue = a[column];
      const bValue = b[column];

      if (direction === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      }
    });
  }
}