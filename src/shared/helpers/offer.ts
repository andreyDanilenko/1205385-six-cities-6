import type { City, Good, Offer, OfferType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    createdDate,
    city,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    avatarUrl,
    isPro,
    firstName,
    email,
    latitude,
    longitude,
    lastName,
  ] = offerData.replace('\n', '').split('\t');

  const user = {
    email,
    isPro: Boolean(isPro),
    avatarUrl,
    firstName,
    lastName,
  };

  const location = {
    latitude: Number(latitude),
    longitude: Number(longitude)
  };

  return {
    title,
    description,
    postDate: new Date(createdDate),
    city: city as City,
    previewImage,
    images: images.split(';').map((img) => img),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rating: Number(rating),
    type: type as OfferType,
    bedrooms: Number(bedrooms),
    maxAdults: Number(maxAdults),
    price: Number.parseInt(price, 10),
    goods: goods.split(';').map((adv) => adv) as Good[],
    user: user,
    location: location
  };
}
