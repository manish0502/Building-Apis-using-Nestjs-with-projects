import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdatePostDto {

  @IsString()
  @IsOptional()
  body: string;
}
