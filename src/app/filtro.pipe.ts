import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], filtro:string): any[] {
    return value.filter((x)=>{
      return x.motivo.toLowerCase().includes(filtro.toLowerCase())
    }
    );
  }
}
