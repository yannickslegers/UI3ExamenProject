import { HttpClient } from '@angular/common/http';
import {Weather} from '../model/Weather';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  private weather;
  private url = 'http://api.worldweatheronline.com/premium/v1' +
    '/weather.ashx?key=0d00719a83ae4d9f9e6142146180501&q=Antwerpen&format=json&num_of_days=1&cc=yes';
  constructor(private http: HttpClient) { }

  // TODO: observable van een weatherresponse maken
  getWeatherData(): Observable<Weather> {
    console.log('komt in get');
    this.http.get(this.url)
      .map(response => {
        this.weather = new Weather(
          response['data.request[0].query'],
          response['data.current_conditions[0].observation_time'],
          response['data.current_conditions[0].temp_C'],
          response['data.current_conditions[0].weatherIconUrl[0].value'],
          response['data.current_conditions[0].weatherDesc[0].value'],
          response['data.current_conditions[0].windspeedKmph'],
          response['data.current_conditions[0].winddir16Point']);
        console.log(response.toString());
      });
    return this.weather;
  }
}
