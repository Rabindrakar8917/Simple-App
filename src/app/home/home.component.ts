import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeDetails: any = [];
  public userDetails:any;
  public id:any;
  constructor(private _homeService: HomeService,private _userService : UserService,private router:Router) {}
  ngOnInit(): void {
    
   
    this._homeService
    .getPostsAndUsers()
    .subscribe((data:any) =>
      {
        this.homeDetails = data;
        
        
      });
  }
  goToPostDetails(postId: number): void {
    this.router.navigate(['/post', postId]);
  }
  
}
