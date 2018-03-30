import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() watchList: Watch[];
  max = 0;
  maxid = 0;
  minid = 0;
  min = 0;
  constructor() {}
  ngOnInit() {}

  find() {
    for (let i = 0; i < this.watchList.length; ++i) {
      if (i < 1) {
        this.max = this.watchList[i].deltaTime;
        this.min = this.watchList[i].deltaTime;
        this.maxid = 0;
      } else {
        if (this.watchList[i].deltaTime > this.max) {
          this.max = this.watchList[i].deltaTime;
          this.maxid = i;
        }
        if (this.watchList[i].deltaTime < this.min) {
          this.min = this.watchList[i].deltaTime;
          this.minid = i;
        }
      }
    }
  }
}
