import {Component, Input, OnInit} from '@angular/core';
import {MediaService} from '../../shared/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  ls: any[] = [1 , 2 , 3];
  pop = false;
  /***********************************/
  media: any[] = [];
  isLoadingResults = true;
  /*********************/
  selectedId: number;
  @Input() data: any;
  @Input() id: any;
  medias;
  @Input() config: any[];
  private link = '';
  private link2 = '';
  confirm() {
    this.pop = true;
  }
  constructor(private api: MediaService, private router: Router) { }
  ngOnInit() {
    this.link = this.data.landingPageBG;
    this.link2 = this.data.logo;
    this.load();
    this.load2();
  }
  load() {
    // this.for1();
    if (this.data.landingPageBG ===  '') {
      this.link = 'http://via.placeholder.com/350x250';
    }
  } load2() {
    // console.log(this.link2);
    if (this.data.logo === '') {
      this.link = 'http://via.placeholder.com/350x250';
    }
  }
}
