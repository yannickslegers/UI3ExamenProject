import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  private weather;
  private url = 'http://api.worldweatheronline.com' +
    '/premium/v1/weather.ashx?key=0d00719a83ae4d9f9e6142146180501&q=Antwerpen&format=json&num_of_days=1&cc=yes';


  constructor(private http: HttpClient) {  }


  getWeatherData(): Observable<any> {
    return this.http.get(this.url).map(res => {console.log(res); });
  }
}
