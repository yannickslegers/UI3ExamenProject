import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Room} from '../../model/room';
import {Settings} from '../../model/settings';

@Component({
  selector: 'app-room-detail',
  templateUrl: './roomDetail.component.html',
  styleUrls: ['./roomDetail.component.scss']
})
export class MyDialogComponent implements OnInit {
  private room: Room = null;
  private settings: Settings = null;

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
    thisDialogRef.disableClose = true;
  }

  ngOnInit() {
    this.room = new Room(this.data.room);
    this.settings = this.data.settings;
  }

  getRoomColor(): string {
    if (!this.settings.showTemperature) {
      return 'white';
    }
    if ( this.room.blinding === true) {
      return 'grey';
    }
    if (this.room.light === 0) {
      return 'white';
    } else {
      return 'rgba(255,255,0,' + this.room.light * 2 / 100 + ')';
    }
  }

  getMusic(): string {
    let musicIcon;
    if (this.room.music === 0) {
      musicIcon = 'fa fa-volume-off';
    } else {
      musicIcon = 'fa fa-volume-up';
    }
    return musicIcon;
  }
}

