import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public content: string;

  @Expose({ name: 'createdAt'})
  public postDate: string;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public userId: UserRdo;
}
