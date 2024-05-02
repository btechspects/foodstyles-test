import { IsString, Length } from 'class-validator';

export class SearchTermDTO {
  @IsString()
  @Length(1, 500)
  searchTerm: string;
}
