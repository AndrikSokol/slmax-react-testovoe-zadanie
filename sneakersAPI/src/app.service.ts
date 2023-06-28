import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sneaker } from './entity/sneaker.entity';
import { Repository } from 'typeorm';
import { SneakerDto } from './dto/sneaker.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Sneaker)
    private sneakersRepository: Repository<Sneaker>,
  ) {}

  async getSneakers(): Promise<Sneaker[]> {
    return this.sneakersRepository.find();
  }

  async getSneaker(id: string): Promise<Sneaker> {
    return this.sneakersRepository.findOne({ where: { id } });
  }

  async addSneaker(sneaker: SneakerDto): Promise<Sneaker> {
    return this.sneakersRepository.save(
      this.sneakersRepository.create(sneaker),
    );
  }

  async deleteSneaker(id: string): Promise<Sneaker> {
    const sneaker = await this.sneakersRepository.findOne({ where: { id } });
    return this.sneakersRepository.remove(sneaker);
  }

  editSneaker(sneaker: Sneaker): Promise<Sneaker> {
    return this.sneakersRepository.save(sneaker);
  }
}
