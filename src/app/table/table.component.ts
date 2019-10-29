import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {Action, IActionButton} from '../interfaces/IActionButton';
import {PagerService} from '../services/pager.service';
import {IPager} from '../interfaces/IPager';

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
  // tslint:disable-next-line:no-output-rename
  @Output('onClickAction') event = new EventEmitter();
  query: string;
  chunkedArray: any;
  clicked = false;
  icon = 'sort';
  // Pagination variables
  maxPageNumberSelector: number;
  responsePageObject: any = {};
  paginatedData: any[];
  isPaginated = false;

  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
  }


  orderBy(key: string) {
    if (!this.clicked && key !== 'action') {
      if (this.isPaginated) {
        this.paginatedData = this.dataSource.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
      }
      this.icon = 'sort-up';
      this.clicked = true;
      this.dataSource = _.orderBy(this.dataSource, [key], ['asc']);
      if (this.isPaginated) {
        this.paginatedData = this.dataSource.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
      }
    } else {
      if (key !== 'action') {
        if (this.isPaginated) {
          this.paginatedData = this.dataSource.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
        }
        this.icon = 'sort-down';
        this.clicked = false;
        this.dataSource = _.orderBy(this.dataSource, [key], ['desc']);

      }
    }
  }

  onClickAction(action: Action, model: any, url?: string) {
    this.event.emit({action, model});

  }

  setPage(page: number) {
    // Riceve l'oggetto con le proprieta da settare dal service
    this.responsePageObject = this.pagerService.getPager(this.dataSource.length, page, this.maxPageNumberSelector);
    console.log(this.responsePageObject);
    // setta gli elementi della pagina corrente da visualizzare
    this.paginatedData = this.dataSource.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
    console.log(this.paginatedData);
  }

  onChange($event: Event) {
    console.log(this.maxPageNumberSelector);
    this.isPaginated = true;
    this.setPage(1);
  }
}
