import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementComponent} from '../element.component';

@Component({
  selector: 'app-texterea',
  templateUrl: './texterea.component.html',
  styleUrls: ['./texterea.component.css']
})
export class TextereaComponent extends ElementComponent implements OnInit {
  @Input() txt: string;
  // @Input() w75: any;
  // @Input() w25: any;
  nameValue: string;
  @Input() marginLeft: any;
  @Input() h: any;
  @Input() w25 = false;
  @Input() w75 = false;
  // @Input() name: string;
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input()  get name() {
    return this.nameValue;
  }

  set name(val) {
    this.nameValue = val;
    this.nameChange.emit(this.nameValue);
  }
  @Input() name1: string;
  @Output() name1Change: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    // console.log(this.name);
    // console.log(this.name1);
  }

}
