import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumPhotosService } from 'src/app/Services/album-photos.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId=0;
  userid=0;
  photos:any;

  userData:any;

  constructor(myRoute:ActivatedRoute,private usersService:UsersService,private PhotosService:AlbumPhotosService){
  this.albumId=  myRoute.snapshot.params["albumid"]
  this.userid=  myRoute.snapshot.params["userid"]

  }
  ngOnInit(): void {
    
    //get user data
    this.usersService.GetUserByID(this.userid).subscribe({
      next:(data)=>{this.userData=data},
      error:(error)=>{console.log(error)}
    });

    //get album photos
    this.PhotosService.GetAlbumPhotos(this.albumId).subscribe({
      next:(data)=>{this.photos=data},
      error:(error)=>{console.log(error)}
    });
  }

}
