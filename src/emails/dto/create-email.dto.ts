import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmailDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  oldEmail: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  newEmail: string;
}
