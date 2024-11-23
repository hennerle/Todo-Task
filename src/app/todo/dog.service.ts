import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog.model';

@Injectable({ providedIn: 'root' })
export class DogService {
  private apiUrl = 'https://dogapi.dog/api/v2/breeds';
  
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.apiUrl}`);
  }

  logDogs(): void {
    this.getDogs().subscribe((response) => {
      console.log('API Response:', response);  // Logge die vollständige Antwort
      //console.log('Dogs Data:', response.data);  // Logge nur die 'data' (die Hunde-Daten)
    });
  }
}