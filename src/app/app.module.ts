import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
