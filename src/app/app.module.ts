import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
