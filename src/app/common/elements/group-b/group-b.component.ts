import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-group-b',
  templateUrl: './group-b.component.html',
  styleUrls: ['./group-b.component.css']
})
export class GroupBComponent implements OnInit {
  @Input() txt: string;
  @Input() marginLeft = '30px';
  @Input() w25 = '';
  @Output() changed = new EventEmitter<boolean>();
f = true;
  constructor() { }

  ngOnInit() {
  }

}
