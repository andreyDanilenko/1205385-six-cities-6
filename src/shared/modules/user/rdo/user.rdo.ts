import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public email: string ;

  @Expose()
  public avatarUrl: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public isPro?: boolean;
}
