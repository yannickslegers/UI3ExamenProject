import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './roomDetail.component.html',
  styleUrls: ['./roomDetail.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) private data, private router: Router) {
    thisDialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  onConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  getRoomColor(): string {
    if ( this.data.blinding === true) {
      return 'grey';
    }
    if (this.data.light === 0) {
      return 'white';
    } else {
      return 'rgba(255,255,0,' + this.data.light * 2 / 100 + ')';
    }
  }

  getMusic(): string {
    let musicIcon;
    if (this.data.music === 0) {
      musicIcon = 'fa fa-volume-off';
    } else {
      musicIcon = 'fa fa-volume-up';
    }
    return musicIcon;
  }
}
