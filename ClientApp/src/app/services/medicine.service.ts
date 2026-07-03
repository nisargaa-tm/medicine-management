import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({ providedIn: 'root' })
export class MedicineService {
  //ivate apiUrl = 'https://localhost:5001/api/medicines'; // your .NET API
  private apiUrl = 'https://localhost:44372/api/medicines';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  add(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine);
  }

  search(name: string): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
