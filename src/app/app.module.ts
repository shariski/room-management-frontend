import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomComponent } from './room/room.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderAddComponent } from './order-add/order-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    RoomComponent,
    OrderComponent,
    UserComponent,
    RoomAddComponent,
    RoomEditComponent,
    MakeOrderComponent,
    OrderAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
