import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Output() public showTemperature: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showLight: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showMusic: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showBlinding: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showOutsideTemperature: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
