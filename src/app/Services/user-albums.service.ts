import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAlbumsService {

  constructor(private myClient:HttpClient) { }
  BaseUrl="  http://localhost:3000/albums";

  //Get All Albums for specific user from the API
  GetUserAlbums(id:any){
    return this.myClient.get(this.BaseUrl+"?userId="+id);
  }
}
