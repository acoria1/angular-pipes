import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasHasta'
})
export class DiasHastaPipe implements PipeTransform {

  transform(value: any): unknown {
    let today = new Date();
    let date = new Date(today.getFullYear(),value.mes - 1,value.dia);
    let dayDiff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return dayDiff < 0 ? `Ya paso hace ${-dayDiff} dias` : `Faltan ${dayDiff} dias`;
  }
}
