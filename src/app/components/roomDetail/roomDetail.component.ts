import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Room} from '../../model/room';
import {Settings} from '../../model/settings';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-detail',
  templateUrl: './roomDetail.component.html',
  styleUrls: ['./roomDetail.component.scss']
})
export class MyDialogComponent implements OnInit {
  private room: Room = null;
  private settings: Settings = null;
  myForm: FormGroup;
  roomName: FormControl;

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
    thisDialogRef.disableClose = true;
  }

  ngOnInit() {
    this.room = new Room(this.data.room);
    this.settings = this.data.settings;
    this.createFormControl();
    this.createForm();
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
    return this.room.music === 0 ? 'fa fa-volume-off' : 'fa fa-volume-up';
  }

  createFormControl() {
    this.roomName = new FormControl('', Validators.required);
  }
  createForm() {
    this.myForm = new FormGroup({
      roomName: this.roomName
    });
  }
}

