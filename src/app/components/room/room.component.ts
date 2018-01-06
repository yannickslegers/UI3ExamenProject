import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../roomDetail/roomDetail.component';
import {Room} from '../../model/room';
import {Settings} from '../../model/settings';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  private settings;

  @Input() public room: Room = {id: 0, height: 0, width: 0, posX: 0, posY: 0, light: 0, music: 0, temp: 0, roomName: '', blinding : false};

  @Input() public showTemperature: boolean;
  @Input() public showMusic: boolean;
  @Input() public showLight: boolean;
  @Input() public showBlinding: boolean;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.settings = new Settings(this.showTemperature, this.showMusic, this.showLight, this.showBlinding);
    const dialogRef = this.dialog.open(MyDialogComponent, {
      // TODO: put width into scss file
      width: '600px',
      data: {room: this.room, settings: this.settings}
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
    if (this.room.light === 0 || !this.showTemperature) {
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
