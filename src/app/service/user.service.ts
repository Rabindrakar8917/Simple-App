import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}
  getUser(id:number): Observable<Iuser> {
    const _url1=`https://jsonplaceholder.typicode.com/users/${id}`;
   return this.http.get<Iuser>(_url1);
 }
}
