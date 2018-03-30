import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttongroup',
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.css']
})
export class ButtonGroupComponent implements OnInit {
  constructor() {}
  @Input() isReset: boolean;
  @Input() isCount: boolean;
  @Output() Start: EventEmitter<void> = new EventEmitter<void>();
  @Output() Stop:  EventEmitter<void> = new EventEmitter<void>();
  @Output() Reset: EventEmitter<void> = new EventEmitter<void>();
  @Output() Count: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {}


}
