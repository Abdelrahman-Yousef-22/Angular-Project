import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AlbumPhotosComponent } from './Components/album-photos/album-photos.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'user/:userid',component:UserAlbumsComponent},
  {path:'user/:userid/album/:albumid',component:AlbumPhotosComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'updataUser/:userid',component:AddUserComponent},

  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
