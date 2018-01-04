import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Room} from '../../model/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './roomDetail.component.html',
  styleUrls: ['./roomDetail.component.scss']
})
export class MyDialogComponent implements OnInit {
  test: Room = null;
  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) {
    thisDialogRef.disableClose = true;
  }

  ngOnInit() {
    this.test = new Room(this.data);
  }

  getRoomColor(): string {
    if ( this.test.blinding === true) {
      return 'grey';
    }
    if (this.test.light === 0) {
      return 'white';
    } else {
      return 'rgba(255,255,0,' + this.test.light * 2 / 100 + ')';
    }
  }

  getMusic(): string {
    let musicIcon;
    if (this.test.music === 0) {
      musicIcon = 'fa fa-volume-off';
    } else {
      musicIcon = 'fa fa-volume-up';
    }
    return musicIcon;
  }
}
