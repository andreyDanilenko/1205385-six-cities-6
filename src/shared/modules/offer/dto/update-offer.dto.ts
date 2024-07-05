import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { City, Good, Location, OfferType } from '../../../types/index.js';
import { CreateUpdateOfferMessage } from './update-offer.messages.js';

export class UpdateOfferDto {
  city?: City;
  previewImage?: string;
  images?: string[];
  isPremium?: boolean;
  isFavorite?: boolean;
  rating?: number;
  bedrooms?: number;
  maxAdults?: number;
  goods?: Good[];
  userId?: string;
  commentCount?: number;
  location?: Location;

  @IsOptional()
  @MinLength(10,{ message: CreateUpdateOfferMessage.title.minLength })
  @MaxLength(100, { message: CreateUpdateOfferMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @MinLength(20, { message: CreateUpdateOfferMessage.description.minLength })
  @MaxLength(1024, { message: CreateUpdateOfferMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: CreateUpdateOfferMessage.postDate.invalidFormat })
  public postDate?: Date;

  @IsOptional()
  @IsString({ message: CreateUpdateOfferMessage.image.invalidFormat })
  @MaxLength(256, { message: CreateUpdateOfferMessage.image.maxLength })
  public image?: string;

  @IsOptional()
  @IsEnum(OfferType, { message: CreateUpdateOfferMessage.type.invalidFormat })
  public type?: OfferType;

  @IsOptional()
  @IsInt({ message: CreateUpdateOfferMessage.price.invalidFormat })
  @Min(100, { message: CreateUpdateOfferMessage.price.min })
  @Max(20000, { message: CreateUpdateOfferMessage.price.max })
  public price?: number;
}
