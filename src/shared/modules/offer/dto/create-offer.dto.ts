import { IsDateString, IsEnum, IsInt, IsMongoId, Max, MaxLength, Min, MinLength } from 'class-validator';
import { City, Good, Location, OfferType } from '../../../types/index.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';

export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title: string;

  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  public city: City;

  @IsDateString({}, { message: CreateOfferValidationMessage.postDate.invalidFormat })
  public postDate: Date;

  @MaxLength(256, { message: CreateOfferValidationMessage.image.maxLength })
  public previewImage: string;

  public images?: string[];

  @IsEnum(OfferType, { message: CreateOfferValidationMessage.type.invalid })
  public type: OfferType;

  @MinLength(1)
  @MaxLength(10)
  public bedrooms: number;

  @MinLength(1)
  @MaxLength(10)
  public maxAdults: number;

  public isFavorite?: boolean;

  public isPremium?: boolean;

  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(200000, { message: CreateOfferValidationMessage.price.maxValue })
  public price: number;

  public rating?: number;

  public goods: Good[];

  @IsMongoId({ message: CreateOfferValidationMessage.userId.invalidId })
  public userId: string;

  location: Location;
}
