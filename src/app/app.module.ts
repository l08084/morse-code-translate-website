import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { OutputComponent } from './components/output/output.component';

@NgModule({
  declarations: [AppComponent, InputComponent, OutputComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
