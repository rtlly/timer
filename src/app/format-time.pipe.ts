import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60000);
    const remainder = value % 60000;
    const seconds = Math.floor(remainder / 1000);
    const milliseconds = Math.floor((remainder % 1000) / 10);
    const toShow = `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(milliseconds)}`;
    return toShow;
  }

  private addZero(time) {
    return time >= 10 ? time : `0${time}`;
  }
}
