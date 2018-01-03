import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/room';
import {Floor} from '../../model/floor';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  private rooms: Room[] = [];
  private currentFloor: Floor;
  private floors: Floor[] = [];
  private floorName = '';

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }


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
}
