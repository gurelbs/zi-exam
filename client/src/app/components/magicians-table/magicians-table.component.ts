import { Component, Input, OnInit } from '@angular/core';
import { Magician } from '../../types';

@Component({
  selector: 'app-magicians-table',
  templateUrl: './magicians-table.component.html',
  styleUrls: ['./magicians-table.component.css']
})
export class MagiciansTableComponent {
  @Input() magicians: Magician[] | null = [];
}
