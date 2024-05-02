import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from '../entities/city.entity';
import { Brand } from '../entities/brand.entity';
import { DishType } from '../entities/dishType.entity';
import { Diet } from '../entities/diet.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
    @InjectRepository(DishType) private dishTypeRepository: Repository<DishType>,
    @InjectRepository(Diet) private dietRepository: Repository<Diet>,
  ) {}

  async extractEntities(searchTerm: string): Promise<any[]> {
    const terms = searchTerm.split(' ');
    const queries = terms.map(term => `%${term}%`);

    // Execute queries concurrently for performance efficiency
    const [cities, brands, dishTypes, diets] = await Promise.all([
      this.cityRepository.createQueryBuilder().where('name ILIKE ANY (:names)', { names: queries }).limit(2).getMany(),
      this.brandRepository.createQueryBuilder().where('name ILIKE ANY (:names)', { names: queries }).limit(2).getMany(),
      this.dishTypeRepository.createQueryBuilder().where('name ILIKE ANY (:names)', { names: queries }).limit(2).getMany(),
      this.dietRepository.createQueryBuilder().where('name ILIKE ANY (:names)', { names: queries }).limit(2).getMany(),
    ]);

    return this.createCombinations(cities, brands, dishTypes, diets);
  }

  private createCombinations(cities: City[], brands: Brand[], dishTypes: DishType[], diets: Diet[]): any[] {
    let combinations = [{ city: null, brand: null, dishType: null, diet: null }];

    // Dynamically build combinations for each entity type
    [cities, brands, dishTypes, diets].forEach(entities => {
      let newCombinations = [];

      entities.forEach(entity => {
        combinations.forEach(combination => {
          if (!combination[entity.constructor.name.toLowerCase()]) { // Avoid adding duplicate types
            const newCombination = { ...combination };
            newCombination[entity.constructor.name.toLowerCase()] = { id: entity.id, name: entity.name };
            newCombinations.push(newCombination);
          }
        });
      });

      // Update combinations if new combinations have been formed
      if (newCombinations.length > 0) {
        combinations = newCombinations;
      }
    });

    // Filter out the initial empty combination and any incomplete combinations
    return combinations.filter(comb => Object.keys(comb).some(key => comb[key] !== null));
  }
}
