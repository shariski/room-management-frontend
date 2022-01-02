import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../Room';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:3000/room';

  constructor(private http: HttpClient) {}

  getRoom(): Observable<Room[]> {
    console.log('hit')
    return this.http.get<Room[]>(this.apiUrl);
  }

  deleteRoom(room: Room): Observable<Room> {
    const url = `${this.apiUrl}/${room._id}`;
    return this.http.delete<Room>(url);
  }

  updateRoom(room: Room): Observable<Room> {
    const url = `${this.apiUrl}/${room._id}`;
    return this.http.put<Room>(url, room, httpOptions);
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room, httpOptions);
  }
}
