import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) { }//inject HTTPClient inside constructor 

  private BaseUrl="  http://localhost:3000/users";

  //Get All users from API
  GetAllUsers(){
    return this.myClient.get(this.BaseUrl);
  }

  //Get speciific user by id from API
  GetUserByID(id:any){
    return this.myClient.get(this.BaseUrl+"/"+id);
  }

  //Add new user to API
  AddNewUser(newUser:any){
    return this.myClient.post(this.BaseUrl,newUser);
  }

  //update userdata inside API
  UpdateUserData(updateUserId:any,updatedUser:any)
  {
   return this.myClient.patch(this.BaseUrl+"/"+updateUserId,updatedUser);
  }

  //delete user from API
  DeleteUser(updateUserId:any){
    return this.myClient.delete(this.BaseUrl+"/"+updateUserId);
  }

}
