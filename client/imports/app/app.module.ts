import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

console.log(1111);
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {}
