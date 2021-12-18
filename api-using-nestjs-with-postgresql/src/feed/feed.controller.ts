import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { feedPost } from '../models/post.interface';
import { CreatePostDto } from '../dto/post.dto';
import { FeedService } from './feed.service';


@Controller('feed')
export class FeedController {
  constructor(private feedService:FeedService) {}

  @Post()
  createReport(@Body() body: CreatePostDto) {
    return this.feedService.createPost(body);
  }

  
}
