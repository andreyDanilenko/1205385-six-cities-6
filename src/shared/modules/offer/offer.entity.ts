import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { City, Good, Location, OfferType } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    type: String,
    trim: true,
    required: true,
    minlength: [10, 'Minimum title length 10 characters'],
    maxlength: [50, 'Maximum title length 50 characters']
  })
  public title: string;

  @prop({
    type: String,
    trim: true,
    required: true,
    minlength: [20, 'Minimum description length 20 characters'],
    maxlength: [500, 'Maximum description length 500 characters']
  })
  public description: string;

  @prop()
    postDate: Date;

  @prop({type: () => String})
    city!: City;

  @prop()
    previewImage!: string;

  @prop({
    type: Array,
    default: () => [] as string[]
  })
    images!: string[];

  @prop()
    isPremium: boolean;

  @prop()
    isFavorite: boolean;

  @prop()
    rating: number;

  @prop({type: () => String})
    type: OfferType;

  @prop({default: 1})
    bedrooms: number;

  @prop({default: 1})
    maxAdults: number;

  @prop()
    price: number;

  @prop({
    type: Array,
    default: () => [] as string[]
  })
    goods: Good[];

  @prop({
    type: () => Object
  })
    location: Location;

  @prop({default: 0})
  public commentCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
