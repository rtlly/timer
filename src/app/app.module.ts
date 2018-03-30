import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { ButtonGroupComponent } from './buttongroup/buttongroup.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { FormatTimePipe } from './format-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    ButtonGroupComponent,
    ShowtimeComponent,
    FormatTimePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
