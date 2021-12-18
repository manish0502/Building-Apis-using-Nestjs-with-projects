import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { feedPostentity } from '../models/post.entity'


@Module({
  imports:[TypeOrmModule.forFeature([feedPostentity])],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
