import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnTxt: string;
  @Input() disabled = false;
  @Input() add;
  @Input() save = false;
  @Input() edit  = false;
  @Input() cancel  = false;
  @Input() remove  = false;
  @Input() upload  = false;
  @Input() yes = false;
@Output() btnClick = new EventEmitter();
  @Input() btnColor: any[] = ['#0F82E8', '#E9032A', '#6DD413'];
  constructor() { }

  ngOnInit() {
  }
  click() {
    this.btnClick.emit();
  }
}
