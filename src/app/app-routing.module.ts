import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAddComponent } from './order-add/order-add.component';
// import { userInfo } from 'os';
import { OrderComponent } from './order/order.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'order/add', component: OrderAddComponent},
  {path: 'room/add', component: RoomAddComponent},
  {path: 'room/edit', component: RoomEditComponent},
  {path: 'room', component: RoomComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrderComponent, RoomAddComponent, RoomEditComponent, RoomComponent, UserComponent]