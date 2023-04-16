import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ArithmaticService } from './arithmatic.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
