import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/room';
import {Floor} from '../../model/floor';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../model/Weather';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  private rooms: Room[] = [];
  private currentFloor: Floor;
  private floors: Floor[] = [];
  private floorName = '';
  private weather = new Weather(null, null, null, null, null, null, null);

  private showTemperature = true;
  private showMusic = true;
  private showLight = true;
  private showBlinding = true;
  private showOutsideTemperature = true;

  constructor(private roomService: RoomService, private weatherService: WeatherService, private route: ActivatedRoute) { }


  ngOnInit() {
    /*
    * Getting data of floor respectively to the route parameter
    * */
    this.route.paramMap
      .subscribe(
        params => {
        const id = +params.get('id');

        this.roomService.getFloors()
          .subscribe(
            floors => {
              this.floors = floors;
              this.setFloor(id);
            },
            error => {
              console.log(error as string);
            }
          );
      });
    /*
    * Getting actual weather data every +- 10 min (600000)
    * */
    // TODO: data om de 10 min ophalen
    this.weatherService.getWeatherData().subscribe(data => {
      console.log(data);
      this.weather = new Weather(
        data.data.request[0].query,
        data.data.current_condition[0].observation_time,
        data.data.current_condition[0].temp_C,
        data.data.current_condition[0].weatherIconUrl[0].value,
        data.data.current_condition[0].weatherDesc[0].value,
        data.data.current_condition[0].windspeedKmph,
        data.data.current_condition[0].winddir16Point
      );
    });
    IntervalObservable.create(600000)
      .subscribe(() => {
        this.weatherService.getWeatherData().subscribe(data => {
          console.log(data);
          this.weather = new Weather(
            data.data.request[0].query,
            data.data.current_condition[0].observation_time,
            data.data.current_condition[0].temp_C,
            data.data.current_condition[0].weatherIconUrl[0].value,
            data.data.current_condition[0].weatherDesc[0].value,
            data.data.current_condition[0].windspeedKmph,
            data.data.current_condition[0].winddir16point
          );
        });
      });
  }

  setFloor(id: number) {
    this.currentFloor = this.floors[id];
    this.rooms = this.currentFloor.rooms;
    this.floorName = this.currentFloor.floorName;
  }

  previousFloor() {
    let floorNr;
    for (let i = 0; i < this.floors.length; ++i) {
      if (this.currentFloor.id === this.floors[i].id) {
        if (i === 0) {
          floorNr = this.floors.length - 1;
        }else {
          floorNr = i - 1;
        }
      }
    }
    return floorNr;
  }

  nextFloor() {
    let floorNr;
    for (let i = 0; i < this.floors.length; ++i) {
      if (this.currentFloor.id === this.floors[i].id) {
        if (i === this.floors.length - 1) {
          floorNr = 0;
        } else {
          floorNr = i + 1;
        }
      }
    }
    return floorNr;
  }

  changeShowTemperature(){
    this.showTemperature = !this.showTemperature;
  }

  changeShowMusic(){
    this.showMusic = !this.showMusic;
  }

  changeShowLight(){
    this.showLight = !this.showLight;
  }

  changeShowBlinding(){
    this.showBlinding = !this.showBlinding;
  }

  changeShowOutsideTemperature(){
    this.showOutsideTemperature = !this.showOutsideTemperature;
  }
}
