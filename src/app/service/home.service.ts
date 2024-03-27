// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Ihome } from '../interface/home';
// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {

//   private _url1='https://jsonplaceholder.typicode.com/posts';
//  constructor(private http: HttpClient) {}
//  getHome(): Observable<Ihome[]> {
//   return this.http.get<Ihome[]>(this._url1);
// }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ihome } from '../interface/home';
import { Iuser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getPostsAndUsers(): Observable<any> {
    const posts$ = this.http.get<Ihome[]>('https://jsonplaceholder.typicode.com/posts');
    const users$ = this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');

    return forkJoin([posts$, users$]).pipe(
      map(results => {
        const posts = results[0];
        const users = results[1];

        // Map each post to its user
        posts.forEach((post: Ihome) => {
          const user = users.find(u => u.id === post.userId);
          post.authorName = user ? user.name : 'Unknown'; // Assuming user has a 'name' field
        });

        return posts;
      })
    );
  }
}

// interface Post {
//   userId: number;
//   authorName?: string; // Added for storing author name
//   // other post properties...
// }

// interface User {
//   id: number;
//   name: string;
//   // other user properties...
// }
