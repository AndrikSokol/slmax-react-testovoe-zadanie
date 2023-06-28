import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sneaker } from './entity/sneaker.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'password123',
      database: 'sneakers',
      entities: [Sneaker],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Sneaker]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
