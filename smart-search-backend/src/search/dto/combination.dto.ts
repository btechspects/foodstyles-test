import { ApiPropertyOptional } from '@nestjs/swagger';
import { EntityDTO } from './entity.dto';

export class CombinationDTO {
  @ApiPropertyOptional({ type: () => EntityDTO })
  city?: EntityDTO;

  @ApiPropertyOptional({ type: () => EntityDTO })
  brand?: EntityDTO;

  @ApiPropertyOptional({ type: () => EntityDTO })
  dishType?: EntityDTO;

  @ApiPropertyOptional({ type: () => EntityDTO })
  diet?: EntityDTO;
}
