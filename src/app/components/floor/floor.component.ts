import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/room';
import {Floor} from '../../model/floor';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../model/Weather';

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
  private weather: Weather;

  private showTemperature = true;
  private showMusic = true;
  private showLight = true;
  private showBlinding = true;
  private showOutsideTemperature = true;

  private weatherObservable;

  constructor(private roomService: RoomService, private weatherService: WeatherService, private route: ActivatedRoute) { }


  ngOnInit() {
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
    // TODO: laten subscriben op de weatherservice
    this.weatherService.getWeatherData().subscribe(res => {console.log(res); });


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
