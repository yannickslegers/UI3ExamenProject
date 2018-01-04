import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Floor} from '../model/floor';

@Injectable()
export class RoomService {
  private roomsUrl = 'api/rooms'; // URL to web api
  private floorsUrl = 'api/floors'; // URL to web api

  constructor(private http: HttpClient) { }

  /*public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }*/

  public getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.floorsUrl);
  }

  /*public getRoom(id: number): Observable<Room> {
    const url = `${this.roomsUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  public getFloor(id: number): Observable<Floor> {
    let url = 'api/floors/?id=${id}';
    return this.http.get<Floor>(url);
  }*/
}
