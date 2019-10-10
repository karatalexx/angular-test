import { Component, Input } from '@angular/core';
import { OfferType } from 'src/app/models/offer.model';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent{

  @Input() offer: OfferType;

  constructor() { }

}
