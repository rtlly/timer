import { Component } from '@angular/core';
import {Watch} from './watch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  watchList: Watch[] = [];
  nowTime: number;
  startTime: number;
  runner: number;
  temp = 0;
  inter: any;
  num = 0;
  num1 = 0;
  minutes = 0;
  second = 0;
  millisecond = 0;
  showTime: string = '0' + this.minutes + ':' + '0' + this.second + ':' + '0' + this.millisecond;
  start() {
   this.nowTime = Date.now();
   this.num = 1;
   this.inter = setInterval(() => {
     this.startTime = Date.now();
     this.runner = this.startTime - this.nowTime;
     this.nowTime = this.startTime;
     this.millisecond += Math.round(this.runner / 10);
     if (this.millisecond >= 100) {
       this.millisecond = this.millisecond - 100;
       this.second += 1;
       if (this.second >= 60) {
         this.second = 0;
         this.minutes += 1;
       }
     }
     this.showTime = (this.minutes > 10 ? this.minutes : '0' + this.minutes) + ':'
       + (this.second > 10 ? this.second : '0' + this.second) + ':'
       + (this.millisecond > 10 ? this.millisecond : '0' + this.millisecond);
   }, 10);
 }

stop() {
  clearInterval(this.inter);
   this.temp += this.runner;
   this.num = 0;
   this.num1 = 1;
}

reset() {
   this.temp = 0;
   this.num = 0;
   this.num1 = 0;
  this.minutes = 0;
  this.second = 0;
  this.millisecond = 0;
  this.showTime = '0' + this.minutes + ':' + '0' + this.second + ':' + '0' + this.millisecond;
  this.watchList.length = 0;
}

count() {
    let watchObj: Watch = {
    id: 0,
    deltaTime: 0,
    time: '0'
  }
  watchObj.id = this.watchList.length + 1;
  watchObj.deltaTime = this.runner;
  watchObj.time = this.showTime;
  this.watchList.push(watchObj);
}
}
