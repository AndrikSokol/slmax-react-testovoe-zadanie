import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class SneakerDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsUrl()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  title: string;
}
