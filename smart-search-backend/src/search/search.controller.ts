import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SearchService } from './search.service';

import { SearchTermDTO } from './dto/search-term.dto';
import { CombinationDTO } from './dto/combination.dto';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Extract entities and generate combinations based on search term' })
  @ApiResponse({ status: 200, description: 'Combinations successfully generated', type: CombinationDTO, isArray: true })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiQuery({ name: 'searchTerm', type: String, description: 'Search term to process' })
  async getCombinations(@Query() searchTermDTO: SearchTermDTO): Promise<any[]> {
    if (!searchTermDTO.searchTerm) {
      throw new HttpException('Search term is required', HttpStatus.BAD_REQUEST);
    }

    try {
      const combinations = await this.searchService.extractEntities(searchTermDTO.searchTerm);
      return combinations;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
