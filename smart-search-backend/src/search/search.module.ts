import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SearchService } from './search.service';

import { SearchController } from './search.controller';

import { City } from '../entities/city.entity';
import { Brand } from '../entities/brand.entity';
import { DishType } from '../entities/dishType.entity';
import { Diet } from '../entities/diet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([City, Brand, DishType, Diet])
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
