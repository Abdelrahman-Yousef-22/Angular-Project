import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  updateUserId:any; // to store userid in updating user data
  updateUserData:any; // to store the data of user that will be updated after getting it from Api

  //inject service into constructor and getting userid from url  
  constructor(private myService:UsersService,myRoute:ActivatedRoute){
    this.updateUserId=myRoute.snapshot.params["userid"]
  }
  ngOnInit(): void {
    // we will check it is add or update by checking the updateuserid if it undefined so it
    //will be adding .... if it is number so it will be updating
    if(this.updateUserId)
    {
      this.myService.GetUserByID(this.updateUserId).subscribe({
        next:(data)=>{this.updateUserData=data},
        error:(error)=>{console.log(error)}
      })
    }
  }

  //Add new user function
  AddUser(name:any,email:any,phone:any,city:any,street:any,suite:any)
  { 

    console.log("adduser method")

    if(!this.CheckEmailFormat(email))//check for email format is correct or not
    {
      alert("Enter Valid Email")
    }
    else if(!this.CheckPhoneFormat(phone))//check for phone format is correct or not
    {
      alert("Enter Valid Phone")
    }
    else
    {

      //create new object  and path it to service function to add to API
      let newuser={name:name,email:email,phone:phone,address:{city:city,street:street,suite:suite} }
      this.myService.AddNewUser(newuser).subscribe(
      {
        next:(data)=>{console.log(data);alert("added successfully ")},
        error:(error)=>{console.log(error)}
      })
    }
  }


  //Update user data

  UpdateUser(name:any,email:any,phone:any,city:any,street:any,suite:any)
  { 
    console.log("updateuser method")

    if(!this.CheckEmailFormat(email))//check for email format is correct or not
    {
      alert("Enter Valid Email")
    }
    else if(!this.CheckPhoneFormat(phone))//check for phone format is correct or not
    {
      alert("Enter Valid Phone")
    }
    else
    {
      //create new object with the updated data and path it to service function to update it in API

      let updateduser={name:name,email:email,phone:phone,address:{city:city,street:street,suite:suite} }

     this.myService.UpdateUserData(this.updateUserId,updateduser).subscribe(
      {
        next:(data)=>{console.log(data);alert("Updated successfully ")},
        error:(error)=>{console.log(error)}
      })
     
    }
  }

  //function that check email format and return true or false
  CheckEmailFormat(email:any)
  {
    var emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return email.match(emailregex)
  }
    
  //function that check phone format and return true or false
  CheckPhoneFormat(phone:any)
  {
    var phoneregex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phone.match(phoneregex)
  }


}
