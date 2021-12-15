import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dtos/photo.dto';

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo) private repo: Repository<Photo>) {}

  async findAll(): Promise<Photo[]> {
    return this.repo.find();
  }

  async createUser(photoDto: CreatePhotoDto): Promise<CreatePhotoDto> {
    const result = await this.repo.create(photoDto);
    return this.repo.save(result);
  }

  findOne(id: string) {
    if (!id) {
      return null;
    }
    return this.repo.findOne(id);
  }

  

  async update(id: string, attrs: Partial<Photo>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async deleteUser(id: string) {
    const result = await this.findOne(id);
    if (!result) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(result);
  }
}
