import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Floor} from '../model/floor';

@Injectable()
export class RoomService {
  private floorsUrl = 'api/floors'; // URL to web api

  constructor(private http: HttpClient) { }

  public getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.floorsUrl);
  }

}
