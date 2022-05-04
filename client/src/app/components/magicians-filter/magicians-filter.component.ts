import { Component, EventEmitter, Output } from '@angular/core';
import { MagicianFilter } from '../../types';

@Component({
  selector: 'app-magicians-filter',
  templateUrl: './magicians-filter.component.html',
  styleUrls: ['./magicians-filter.component.css']
})
export class MagiciansFilterComponent {
  filterData: MagicianFilter = {
    by: '',
    direction: ''
  };
  @Output() filter = new EventEmitter<MagicianFilter>();

  reset() {
    // implement me
  }
}
