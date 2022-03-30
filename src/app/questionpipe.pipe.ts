import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionpipe'
})
export class QuestionpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
