import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
