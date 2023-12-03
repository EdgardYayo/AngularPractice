import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client/client.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ClientComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
