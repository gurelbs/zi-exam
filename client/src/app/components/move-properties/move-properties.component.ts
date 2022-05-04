import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-move-properties',
  templateUrl: './move-properties.component.html',
  styleUrls: ['./move-properties.component.css']
})
export class MovePropertiesComponent {
  @Input() a: string[] = [];
  @Input() b: string[] = [];

  atob() {

  }

  btoa() {

  }
}
