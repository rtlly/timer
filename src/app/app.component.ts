import { Component, ViewChild } from '@angular/core';
import { RecordComponent } from './record/record.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RecordComponent) child: RecordComponent;
  watchList: Watch[] = [];
  runner = 0;
  inter: any;
  isReset = true;
  isCount = true;

  start() {
    let nowTime = Date.now();
    let startTime: number;
    this.isReset = true;
    this.isCount = false;
    this.inter = setInterval(() => {
      startTime = Date.now();
      this.runner = startTime - nowTime + this.runner;
      nowTime = startTime;
    }, 10);
  }

  stop() {
    clearInterval(this.inter);
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
    if (this.watchList.length > 0) {
      watchObj.deltaTime =
        this.runner - this.watchList[this.watchList.length - 1].now;
    } else {
      watchObj.deltaTime = this.runner;
    }
    this.watchList.push(watchObj);
    this.child.find();
  }
}
