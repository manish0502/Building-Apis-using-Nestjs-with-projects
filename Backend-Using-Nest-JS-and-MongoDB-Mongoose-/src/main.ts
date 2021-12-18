import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  //app.use(morgan('tiny'));

  await app.listen(3000);
 //console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
