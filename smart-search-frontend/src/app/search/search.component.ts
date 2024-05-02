import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  results: any[] = [];

  constructor(private apiService: ApiService) {}

  onSearch(): void {
    if (this.searchTerm) {
      this.apiService.searchEntities(this.searchTerm).subscribe({
        next: (data) => this.results = data,
        error: (error) => console.error('Search failed:', error)
      });
    }
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  formatKey(key: string): string {
    return key.replace(/([A-Z])/g, ' $1').trim();
  }
}
