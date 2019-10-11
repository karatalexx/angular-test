import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { OfferCardComponent } from './offer-card/offer-card.component';



@NgModule({
  declarations: [
    MainPageComponent,
    OfferCardComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SwiperModule,
  ],
})
export class MainPageModule { }
