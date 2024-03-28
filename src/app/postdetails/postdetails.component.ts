
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: any;
  postDetails: any;
  comments :any=[];
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      this.postId = params['id'];
      await this.fetchPostDetails();
      this.fetchComments();
      
    });
  }

  // fetchPostDetails(): void {
  //   this.postService.getPost(this.postId)
  //     .subscribe(post => {
  //       this.postDetails = post;

  //     });
  // }
  async fetchPostDetails(): Promise<void> {
    this.postService.getPost(this.postId)
      .subscribe(
        post => {
          console.log('Post details:', post); // Log the response
          this.postDetails = post;
        },
        error => {
          console.error('Error fetching post details:', error);
        }
      );
  }
  
  fetchComments():void{
    this.postService.getComments(this.postId)
    .subscribe(comments => this.comments=comments);
  }
}
