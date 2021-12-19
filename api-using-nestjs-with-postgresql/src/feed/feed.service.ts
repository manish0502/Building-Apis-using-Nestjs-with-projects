import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { feedPostentity } from '../models/post.entity'
import { CreatePostDto } from '../dto/post.dto';
import { feedPost } from '../models/post.interface';

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
   

    findAll(){
      return this.repo.find()
    }

    findOne(id: number):Promise<feedPostentity> {
      if (!id) {
        return null;
      }
      return this.repo.findOne(id);
    }


    // updatePost(id: number, feedupdatePost: CreatePostDto){
    //   return this.repo.update(id, feedupdatePost);
    // }


    async update(id: number, attrs: Partial<feedPostentity>) {
      const user = await this.findOne(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      Object.assign(user, attrs);
      return this.repo.save(user);
    }


    async remove(id: number):Promise<feedPostentity> {
      const user = await this.findOne(id);
      if (!user) {
        throw new NotFoundException('user not found');
      }
      return this.repo.remove(user);
    }


    //Applying pagination from services

    findPosts(take:number=10 , skip:number= 0){
       return  from(this.repo.findAndCount({ take , skip})
       .then(([posts])=>{
         return <any[]>posts
       }))
        
    } 
}
