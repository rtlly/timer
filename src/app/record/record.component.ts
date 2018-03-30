import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnChanges {
  @Input() watchList: Watch[];
  max = 0;
  maxId = 0;
  minId = 0;
  min = 0;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.watchList) {
      this.find();
    }
  }
  constructor() {}
  ngOnInit() {}
  find() {
    for (let i = 0; i < this.watchList.length; ++i) {
      if (i < 1) {
        this.max = this.watchList[i].deltaTime;
        this.min = this.watchList[i].deltaTime;
        this.maxId = 0;
      } else {
        if (this.watchList[i].deltaTime > this.max) {
          this.max = this.watchList[i].deltaTime;
          this.maxId = i;
        } else if (this.watchList[i].deltaTime < this.min) {
          this.min = this.watchList[i].deltaTime;
          this.minId = i;
        }
      }
    }
  }
}
