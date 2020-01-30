import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictacgameComponent } from './tictacgame/tictacgame.component';
import { Modal1Component } from './modal1/modal1.component';

@NgModule({
  declarations: [
    AppComponent,
    TictacgameComponent,
    
    Modal1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
