import { Component, ViewChild } from '@angular/core';
import { RecordComponent } from './record/record.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  watchList: Watch[] = [];
  runner = 0;
  inter: any;
  isReset = true;
  isCount = true;
  nowTime: number;
  start() {
    this.isReset = true;
    this.isCount = false;
    this.nowTime = Date.now();
    this.inter = requestAnimationFrame(() => this.time());
  }

  stop() {
    cancelAnimationFrame(this.inter);
    this.isReset = false;
    this.isCount = true;
  }

  reset() {
    this.isReset = true;
    this.isCount = true;
    this.watchList.length = 0;
    this.runner = 0;
  }

  count() {
    const watchObj: Watch = {
      deltaTime: 0,
      now: 0
    };
    watchObj.now = this.runner;
    watchObj.deltaTime =
      this.watchList.length > 0
        ? this.runner - this.watchList[this.watchList.length - 1].now
        : this.runner;
    this.watchList.push(watchObj);
    this.watchList = this.watchList.slice();
  }
  time() {
    const startTime = Date.now();
    this.runner = startTime - this.nowTime + this.runner;
    this.nowTime = startTime;
    this.inter = requestAnimationFrame(() => this.time());
  }
}
