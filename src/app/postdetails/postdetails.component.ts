import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post-service.service';
import { Ipost } from '../interface/postdetails';

@Component({
  selector: 'app-post-details',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId?: number;
  public postDetails?: Ipost;
  public comments :any=[];
  constructor(private route: ActivatedRoute, private postService: PostService) { }

   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = parseInt(params['id']);
      this.fetchPostDetails(this.postId);
      this.fetchComments(this.postId);
     
      
    });
  }
  fetchPostDetails(id:number): void {
    this.postService.getPost(id)
      .subscribe(post => {
        this.postDetails = post;

      });
  }
  fetchComments(id:number):void{
    this.postService.getComments(id)
    .subscribe(comments => this.comments=comments);
  }
}
