import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { User } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: false, default: '' })
  public avatarUrl: string;

  @prop({ required: true, default: '' })
  public name: string;

  @prop({ required: true, default: '' })
  public isPro: boolean;

  @prop({ required: true, default: '' })
  private password?: string;

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.avatarUrl = userData.avatarUrl;
    this.name = userData.name;
    this.isPro = userData.isPro;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);

// import { getModelForClass, prop, defaultClasses, modelOptions } from '@typegoose/typegoose';
// import { User } from '../../types/index.js';
// import { createSHA256 } from '../../helpers/index.js';
// // import { OfferEntity } from '../offer/index.js';
// // import { CommentEntity } from '../comment/index.js';

// // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
// export interface UserEntity extends defaultClasses.Base {}

// @modelOptions({
//   schemaOptions: {
//     collection: 'users',
//     timestamps: true,
//   }
// })

// // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
// export class UserEntity extends defaultClasses.TimeStamps implements User {
//   @prop({required: true})
//   public name: string;

//   @prop({required: true, unique: true})
//   public email: string;

//   @prop({ required: false, default: '' })
//   public avatarUrl: string;

//   @prop({required: true})
//   public isPro: boolean;

//   // @prop({
//   //   ref: OfferEntity,
//   //   default: () => [],
//   // })
//   // offers: Ref<OfferEntity>[];

//   // @prop({
//   //   ref: CommentEntity,
//   //   default: () => [],
//   // })
//   // comments: Ref<CommentEntity>[];

//   @prop({required: true, default: ''})
//   private password?: string;

//   constructor(userData: User) {
//     super();

//     this.email = userData.email;
//     this.avatarUrl = userData.avatarUrl;
//     this.name = userData.name;
//     this.isPro = userData.isPro;
//   }

//   public setPassword(password: string, salt: string) {
//     this.password = createSHA256(password, salt);
//   }

//   public getPassword() {
//     return this.password;
//   }
// }

// export const UserModel = getModelForClass(UserEntity);


