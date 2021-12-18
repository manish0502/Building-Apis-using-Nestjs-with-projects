import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Patch,
  Query,
  Delete
} from '@nestjs/common';
import { feedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdatePostDto} from '../dto/updatePost.dto'


import { CreatePostDto } from '../dto/post.dto';
import { FeedService } from './feed.service';


@Controller('feed')
export class FeedController {
  constructor(private feedService:FeedService) {}

  @Post()
  createReport(@Body() body: CreatePostDto) {
    return this.feedService.createPost(body);
  }

  @Get()
  findAll(){
    return this.feedService.findAll()
  }

  // @Patch('/:id')
  // updateUser(@Param('id') id: number, @Body() body: CreatePostDto){
  //   return this.feedService.update(id, body);
  // }

  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.feedService.findOne(parseInt(id));
  }


  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdatePostDto) {
    return this.feedService.update(parseInt(id), body);
  }


  //http://localhost:3000/api/feed/17

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.feedService.remove(parseInt(id));
  }


 
}
