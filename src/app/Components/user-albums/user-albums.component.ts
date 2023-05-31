import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAlbumsService } from 'src/app/Services/user-albums.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {

  userid=0;
  userData:any;
  userAlbums:any;
  constructor(myRoute:ActivatedRoute,private usersService:UsersService,private albumsService:UserAlbumsService){
   this.userid= myRoute.snapshot.params["userid"];
  }
  ngOnInit(): void {

    //Get userdata
     this.usersService.GetUserByID(this.userid).subscribe({
      next:(data)=>{this.userData=data},
      error:(error)=>{console.log(error)}
    });

    //get user albums
    this.albumsService.GetUserAlbums(this.userid).subscribe({
      next:(data)=>{this.userAlbums=data},
      error:(error)=>{console.log(error)}
    });
  }

}
