import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })

export class InversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}
