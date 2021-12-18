import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { feedPostentity } from '../models/post.entity'
import { CreatePostDto } from '../dto/post.dto';
import { feedPost} from '../models/post.interface'

@Injectable()
export class FeedService {

    constructor(@InjectRepository(feedPostentity) 
    private readonly repo: Repository<feedPostentity>){}
  

    async createPost(photoDto: CreatePostDto): Promise<feedPostentity> {
        const result = await this.repo.create(photoDto);
        return this.repo.save(result);
      }


    // async createPost(photoDto: CreatePostDto): Observable<feedPostentity> {
    //   const result = await this.repo.create(photoDto);
    //   return from(this.repo.save(result));
    // }
   
}
