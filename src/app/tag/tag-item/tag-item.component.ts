import {Component, Input, OnInit} from '@angular/core';
import {ConfigurationService} from '../../shared/configuration.service';
import {Router} from '@angular/router';
import {TagService} from '../../shared/tag.service';
import {ɵStyleData} from '@angular/animations';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.css']
})
export class TagItemComponent implements OnInit {
  ls: any[] = [1 , 2 , 3];
  pop = false;
  /***********************************/
  configuration: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'logo', 'device'];
  isLoadingResults = true;
  /*********************/
  selectedId: number;
  @Input() data: any;
  @Input() id: any;
  idc: any;
  configurations;
  @Input() config: any[];

  constructor(private api: TagService, private router: Router) { }
  // constructor(){}
  go(c) {
    // this.router.navigateByUrl('configuration/edit');
  }
  ngOnInit() {
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/tags']);
  }
  /****function getById ******/
  deleteProduct(idc) {
    this.pop = true;
    // id = this.Id;
    this.isLoadingResults = true;
    this.api.deleteTag(idc)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.reloadComponent();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  confirm(idc) {
    this.pop = true;
  }
}
