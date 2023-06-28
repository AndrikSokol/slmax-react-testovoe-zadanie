import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Sneaker } from './entity/sneaker.entity';
import { SneakerDto } from './dto/sneaker.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSneakers(): Promise<Sneaker[]> {
    return this.appService.getSneakers();
  }

  @Get(':id')
  getSneaker(@Param('id') id: string): Promise<Sneaker> {
    return this.appService.getSneaker(id);
  }

  @Delete(':id')
  deleteSneaker(@Param('id') id: string): Promise<Sneaker> {
    return this.appService.deleteSneaker(id);
  }

  @Put()
  editSneaker(@Body() sneaker: Sneaker): Promise<Sneaker> {
    return this.appService.editSneaker(sneaker);
  }

  @Post()
  addSneaker(@Body() sneaker: SneakerDto): Promise<Sneaker> {
    return this.appService.addSneaker(sneaker);
  }
}
