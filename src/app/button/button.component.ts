import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IButton} from '../interfaces/IButton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() config: IButton;
  constructor() { }

  ngOnInit() {
  }

}
