import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsOptional()
  @IsString({ message: CreateUserMessages.avatarUrl.invalidFormat })
  public avatarUrl: string;

  @IsString({ message: CreateUserMessages.firstName.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.firstName.lengthField })
  public firstName: string;

  @IsOptional()
  @IsString({ message: CreateUserMessages.lastName.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.lastName.lengthField })
  public lastName: string;

  @IsOptional()
  public isPro: boolean;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password: string;
}
