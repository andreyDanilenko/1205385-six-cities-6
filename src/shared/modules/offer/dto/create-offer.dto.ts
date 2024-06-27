import { City, Good, Location, OfferType } from '../../../types/index.js';

export class CreateOfferDto {
  title: string;
  description: string;
  city: City;
  postDate: Date;
  previewImage: string;
  images?: string[];
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Good[];
  userId: string;
  location: Location;
}
