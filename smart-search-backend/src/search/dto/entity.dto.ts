import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class EntityDTO {
  @ApiProperty({ description: 'The unique identifier of the entity.', example: 123 })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'The name of the entity.', example: 'Example Name' })
  @IsString()
  name: string;
}
