import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squadreName'
})



export class SquadreNamePipe implements PipeTransform {
   names = [
    'Squadra verde foglia',
    'Squadra rosso fuoco',
    'Squadra blu zaffiro',
    'Squadra diamante',
    'Squadra perla'
  ]
  transform(value: number, ...args: unknown[]): any {
    return this.names[value]?this.names[value]:value;
  }

}
