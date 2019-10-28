import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { debounce } from 'lodash';
import {IButton} from '../interfaces/IButton';
import {IUser} from '../interfaces/IUser';
import {Action, IActionButton} from '../interfaces/IActionButton';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  keys = Object.keys;
  @Input() searchBar ? = false;
  @Input() buttonConfig?: Array<IActionButton>;
  @Input() dataSource: Array<any>;
  @Input() dataHeader: Array<{key: string, value: string}>;
  @Output('onClickAction') event = new EventEmitter();
  query: string;


  constructor() {}

  ngOnInit() {
  }

  onClickAction(action: Action, model: any, url?: string) {
    this.event.emit({action, model});
  }

}
