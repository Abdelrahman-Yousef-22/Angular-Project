import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './Components/album-photos/album-photos.component';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    HeaderComponent,
    ErrorComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
