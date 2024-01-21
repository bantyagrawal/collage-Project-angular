import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}

  post(url: string, data: any) {
    return this.http.post(`${baseUrl}/${url}`, data);
  }

  get(url: string) {
    return this.http.get(`${baseUrl}/${url}`);
  }
}
