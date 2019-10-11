import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { OfferType } from "../../models/offer.model";

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

  offers: OfferType[] = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.get('/offer')
      .subscribe(offers => {
        this.offers = offers as OfferType[];
      });
  }

  deleteOffer(index: number) {
    const { _id: id } = this.offers[index];
    this.apiService.delete(`/offer/${id}`)
      .subscribe(() => {
        this.offers = this.offers.filter(offer => offer._id !== id);
      });
  }

}
