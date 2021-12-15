import {
    IsNumber,
    IsString,
    IsEmail,
    IsOptional
  
  } from 'class-validator';
  
  export class UpdatePhotoDto {

    @IsString()
    @IsOptional()
    name: string;
  
    @IsString()
    @IsOptional()
    lastname: string;


    @IsEmail()
    @IsOptional()
    email: string;
    
    @IsNumber()
    @IsOptional()
    telephone: number;
    

  }