import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() child = new EventEmitter<any>();
  values = '';
  @Input() Txt: string;
  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) {// without type info
    this.values = event.target.value;
    console.log(this.values);
    this.child.emit(this.values);
  }
}
