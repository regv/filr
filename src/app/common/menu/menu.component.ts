import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showFirst = true;
  constructor() { }
   onClick(event: any) {
    event.preventDefault();
    const element: HTMLElement  =  document.getElementById('bu') as HTMLElement ;
    element.click();
  }
  toggle() {
    if ( !this.showFirst ) {
      this.showFirst = true ;
    } else {
      this.showFirst = false ;
    }
  }
  ngOnInit() {
  }
}
