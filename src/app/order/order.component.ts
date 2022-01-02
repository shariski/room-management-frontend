import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../../Order'
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe((orders) => (this.orders = orders));
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order).subscribe();
    // this.router.navigate(['/order']);
    window.location.reload();
  }

  approveOrder(order: Order) {
    order.status = 'approved'
    this.orderService.updateOrder(order).subscribe();
    // this.router.navigate(['/order']);
    // window.location.reload();
  }

  rejectOrder(order: Order) {
    order.status = 'rejected'
    this.orderService.updateOrder(order).subscribe();
    // this.router.navigate(['/order']);
    // window.location.reload();
  }
}

