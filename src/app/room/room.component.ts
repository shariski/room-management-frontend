import { Component, OnInit, Input, Output } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../../Room'
import { Router } from '@angular/router';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.roomService.getRoom().subscribe((rooms) => (this.rooms = rooms));
  }

  // deleteOrder(order: Order) {
  //   this.orderService.deleteOrder(order).subscribe();
  //   // this.router.navigate(['/order']);
  //   window.location.reload();
  // }

  // approveOrder(order: Order) {
  //   order.status = 'approved'
  //   this.orderService.updateOrder(order).subscribe();
  //   // this.router.navigate(['/order']);
  //   // window.location.reload();
  // }

  // rejectOrder(order: Order) {
  //   order.status = 'rejected'
  //   this.orderService.updateOrder(order).subscribe();
  //   // this.router.navigate(['/order']);
  //   // window.location.reload();
  // }
}

