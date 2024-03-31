import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ipost } from '../interface/postdetails';
import { Ihome } from '../interface/home';
import { Iuser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId: number): Observable<Ipost> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.id === postId))
    );
  }
  getComments(postId:number): Observable<any>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  }
  
  
}
