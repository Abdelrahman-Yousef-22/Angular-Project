import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/Components/add-user/add-user.component';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   usersData : any;

  constructor(private myService:UsersService,private dialog:MatDialog)
  {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data)=>{this.usersData=data},
        error:(error)=>{console.log(error)}
      }
    )
  }


  //delete specific user
  DeleteUser(userid:any,username:any)
  {
    // add confirmation alert
    const confirmation = confirm(`Are you sure you want to delete ${username}?`);
    console.log(confirmation);
    if(confirmation)
    {
      this.myService.DeleteUser(userid).subscribe
      ({
        next:()=>{this.usersData = this.usersData.filter((user:any) => user.id !== userid); console.log(this.usersData)},
        error:(error)=>{console.log(error)}
      })
    }
    else
    {
      console.log("cancel confirmation")
    }

  }

  openPopup() {
    this.dialog.open(AddUserComponent, {
      width: '400px',
      
    });
  }

}
