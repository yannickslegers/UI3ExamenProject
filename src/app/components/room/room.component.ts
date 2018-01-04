import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../roomDetail/roomDetail.component';
import {Room} from '../../model/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  // TODO: private
  dialogResult = '';

  @Input() public room: Room = {id: 0, height: 0, width: 0, posX: 0, posY: 0, light: 0, music: 0, temp: 0, roomName: '', blinding : false};


  @Input() public options = {showMusic: true, showLighting: true, showDimming: true, showTemperature: true};

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: this.room
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed ' + result);
      if (result && result !== 'cancel') {
        this.room = result;
      }
    });
  }

  getRoomColor(): string {
    if ( this.room.blinding === true) {
      return 'grey';
    }
    if (this.room.light === 0) {
      return 'white';
    }
    return 'rgba(255,255,0,' + this.room.light * 2 / 100 + ')';
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
