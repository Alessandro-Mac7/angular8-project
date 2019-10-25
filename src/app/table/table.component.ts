import {Component, Input, OnInit} from '@angular/core';
import { debounce } from 'lodash';
import {IButton} from '../interfaces/IButton';
import {IUser} from '../interfaces/IUser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  keys = Object.keys;
  @Input() buttonConfig?: Array<IButton>;
  @Input() dataSource: Array<any>;
  @Input() dataHeader: Array<{key: string, value: string}>;

  constructor() { }

  ngOnInit() {
  }
}
