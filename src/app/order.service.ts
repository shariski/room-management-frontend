import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Order';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/order';

  constructor(private http: HttpClient) {}

  getOrder(): Observable<Order[]> {
    console.log('hit')
    return this.http.get<Order[]>(this.apiUrl);
  }

  deleteOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${order._id}`;
    return this.http.delete<Order>(url);
  }

  updateOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${order._id}`;
    return this.http.put<Order>(url, order, httpOptions);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order, httpOptions);
  }
}
