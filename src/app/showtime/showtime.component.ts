import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  @Input() runner: number;
  constructor() {}

  ngOnInit() {}
}
