import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClient,
    StorageService,
    UserService,
    ApiService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
