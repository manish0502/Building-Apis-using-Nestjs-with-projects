import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { feedPostentity } from '../models/post.entity'

@Injectable()
export class FeedService {

    constructor(@InjectRepository(feedPostentity) 
    private readonly repo: Repository<feedPostentity>){}

   create(){

   }

   delete(){

   }
}
