import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  searchEntities(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search?searchTerm=${encodeURIComponent(searchTerm)}`);
  }
}
