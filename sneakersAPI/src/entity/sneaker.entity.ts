import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sneaker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'varchar', length: 600 })
  description: string;

  @Column({ type: 'varchar', length: 250 })
  image: string;

  @Column({ type: 'varchar', length: 250 })
  title: string;
}
