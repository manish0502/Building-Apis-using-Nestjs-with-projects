import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  NotFoundException,
  ExceptionFilter,
  Param,
  Patch,
  Delete,
  HttpCode,
  UseInterceptors,
 ClassSerializerInterceptor,

} from '@nestjs/common';
import { Serialize } from '../interceptor/serialize.interceptor';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dtos/photo.dto';
import { UpdatePhotoDto } from './dtos/updatePhoto.dto';
import { UserRulesDto } from './dtos/UserRules.dto'


@Controller('photo')
@Serialize(UserRulesDto)
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  
  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post('create')
  @HttpCode(200)
  async createReport(@Body() body: CreatePhotoDto) {
    const result = await this.photoService.createUser(body);
    return result;
  }

 
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.photoService.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.photoService.deleteUser(id);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdatePhotoDto){
    return this.photoService.update(id, body);
  }

}
