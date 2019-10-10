import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatCardModule } from '@angular/material';
import { SwiperModule } from 'ngx-swiper-wrapper';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule,
    SwiperModule,
  ],
})
export class MainPageModule { }
