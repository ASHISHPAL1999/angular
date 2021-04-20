import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaarComponent } from './Components/Header/navbaar/navbaar.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { Part1Component } from './Components/Body/part1/part1.component';
import { Part2Component } from './Components/Body/part2/part2.component';
import { Part3Component } from './Components/Body/part3/part3.component';
import { Part4Component } from './Components/Body/part4/part4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbaarComponent,
    FooterComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
