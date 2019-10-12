import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  ls: any[] = [1 , 2 , 3];
  pop = false;
  confirm() {
    this.pop = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
