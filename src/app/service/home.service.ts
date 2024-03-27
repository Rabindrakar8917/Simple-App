import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ihome } from '../interface/home';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _url1='https://jsonplaceholder.typicode.com/posts';
 constructor(private http: HttpClient) {}
 getHome(): Observable<Ihome[]> {
  return this.http.get<Ihome[]>(this._url1);
}
}
