import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  
  @Entity('feed_post')

  export class feedPostentity {

    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ default:''})
    body: string;
  
    @Column({ type :'timestamp' , default:()=> 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
  
  
  
  @AfterInsert()
    logInsert() {
      console.log(`Post has been created with id ${this.id}`);
    }
  
  @AfterUpdate()
    logUpdate(){
      console.log('Post has been updated with id : ' ,this.id)
    }
  
  
    @AfterRemove()
    logRemove() {
      console.log('Removed Post with id', this.id);
    }
  
  }
  