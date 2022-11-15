import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedUiButtonModule } from '@vl/shared/ui-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiButtonModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
