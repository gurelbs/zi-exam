import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Magician, MagicianFilter } from '../../types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-magicians',
  templateUrl: './magicians.component.html',
  styleUrls: ['./magicians.component.css']
})
export class MagiciansComponent implements OnInit {
  magicians: Observable<Magician[]> | undefined;

  constructor(public readonly data: DataService) {
  }

  ngOnInit(): void {
    this.magicians = this.data.fetchMagicians();
  }

  fetchFiltered(filter: MagicianFilter) {
    // implement me
  }
}
