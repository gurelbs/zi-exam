import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Magician, MagicianFilter } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public readonly http: HttpClient) {
  }

  fetchMagicians(filter?: MagicianFilter) {
    const params = filter
      ? new URLSearchParams(filter as Record<string, string>).toString()
      : '';
    return this.http.get<Magician[]>('/api/fetch?' + params);
  }
}
