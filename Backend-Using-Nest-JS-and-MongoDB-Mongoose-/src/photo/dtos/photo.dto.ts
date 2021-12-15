import {
    IsNumber,
    IsString,
    IsEmail
  
  } from 'class-validator';
  
  export class CreatePhotoDto {

    @IsString()
    name: string;
  
    @IsString()
    lastname: string;


    @IsEmail()
    email: string;
    
    @IsNumber()
    telephone: number;
    

  }