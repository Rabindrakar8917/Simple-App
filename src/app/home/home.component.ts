import { Component, OnInit } from '@angular/core';
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
  public i=10;
  constructor(private _homeService: HomeService,private _userService : UserService) {}
  ngOnInit(): void {
    
   
    this._homeService
    .getHome()
    .subscribe((data) =>
      {
        this.homeDetails = data;
        
        this.fetching(this.homeDetails[this.i].userId)
      });
  }
  fetching(id:number):void{
    this._userService.getUser(id)
    .subscribe((data1) => (this.userDetails = data1));
  }
}
