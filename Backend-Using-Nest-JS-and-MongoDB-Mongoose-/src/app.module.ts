import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    PhotoModule,
    TypeOrmModule.forRoot({

      name:'default',
      type:'mongodb',
      host: 'localhost',
      port:27017,
      database: 'api',
      useNewUrlParser: true, 
      autoLoadEntities:true,
      useUnifiedTopology: true,  
      entities: [Photo],
      synchronize: true,
    
      
    })
  
  ],
  controllers: [AppController],
  providers: [AppService , {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      
    }),
  }],
})
export class AppModule {}
