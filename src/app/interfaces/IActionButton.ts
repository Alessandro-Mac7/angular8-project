import {IButton} from './IButton';

export interface IActionButton extends IButton {
  class: string;
  icon: string;
  label: string;
  tooltip: string;
  type: string;
  action: Action;
}

export enum Action {
  delete,
  update,
  edit,
  save,
  get,
  redirect,
  noAction
}
