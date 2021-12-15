import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ObjectID, 
    ObjectIdColumn
  } from 'typeorm';
  //import { ObjectID } from 'mongodb'
  
  
  

  @Entity()
  export class Photo {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    telephone: number;
    
  
  
    @AfterInsert()
    logInsert() {
        console.log(`User has been inserted with id ${this.id}`);
        }
    
    @AfterUpdate()
    logUpdate(){
        console.log('User has been updated with id : ' ,this.id)
    }
    
    
    @AfterRemove()
    logRemove() {
       console.log('Removed User with id', this.id);
    }
  
  }
  