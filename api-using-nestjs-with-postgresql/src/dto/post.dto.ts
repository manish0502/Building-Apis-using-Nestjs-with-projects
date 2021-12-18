import {
    IsString,
    IsDate,
    IsNumber,
    IsOptional
  } from 'class-validator';
  
  export class CreatePostDto {
      
    @IsNumber()
    @IsOptional()
    id:number

    @IsString()
    body: string;
   
    @IsDate()
    @IsOptional()
    createdAt: Date;
  
  }
  