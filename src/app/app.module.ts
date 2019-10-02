import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTransportadoraComponent } from './create-transportadora/create-transportadora.component';
import { TransportadoraDetailsComponent } from './transportadora-details/transportadora-details.component';
import { TransportadoraListComponent } from './transportadora-list/transportadora-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateTransportadoraComponent,
    TransportadoraDetailsComponent,
    TransportadoraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
