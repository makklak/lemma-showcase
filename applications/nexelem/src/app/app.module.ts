import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedUiButtonModule } from '@vl/shared/ui-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
