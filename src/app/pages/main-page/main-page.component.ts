import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public config: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 50,
    // autoHeight: true,
    direction: 'horizontal',
    a11y: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
