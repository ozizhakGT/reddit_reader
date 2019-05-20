import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://www.reddit.com/r/';
  constructor(private http: HttpClient) { }

  getPosts(query: string, limit: number) {
    return this.http.get(`${this.baseUrl + query}.json?limit=${limit}`);
  }
}
