// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostServiceService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Icomments } from '../interface/Comments';
import { Ihome } from '../interface/home';
import { Iuser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPostDetails(postId: number): Observable<any> {
    const post$ = this.http.get<Ihome>(`https://jsonplaceholder.typicode.com/posts/${1}`);
    const user$ = this.http.get<Iuser>('YOUR_USERS_API_URL');
    const comments$ = this.http.get<Icomments[]>(`YOUR_COMMENTS_API_URL?postId=${postId}`);

    return forkJoin([post$, user$, comments$]).pipe(
      map(results => {
        const post = results[0];
        const user = results[1];
        const comments = results[2];

        post.authorName = user.find(u => u.id === post.userId);
        post.Comments = comments;

        return post;
      })
    );
  }
}
