import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <div>
        <button (click)="previous.emit()"><</button>
        <span>{{floorName}}</span>
        <button (click)="next.emit();">></button>
    </div>
        `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() public floorName: string;
  @Output() public previous: EventEmitter<any> = new EventEmitter();
  @Output() public next: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
