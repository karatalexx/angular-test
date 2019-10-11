import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OfferType } from 'src/app/models/offer.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {

  @Input() offer: OfferType;
  @Output() onDeleteCurrentOffer: EventEmitter<any> = new EventEmitter();

  constructor(
    private userService: UserService,
  ) {

  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  countStars(): number[] {
    return [...Array(5).keys()];
  }

  deleteCurrentOffer() {
    this.onDeleteCurrentOffer.emit();
  }
}
