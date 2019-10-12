import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Student} from '../../students';
import {ConfigurationService} from '../../shared/configuration.service';
import {switchMap} from 'rxjs/operators';

// import {ConfigurationService} from '/src/app/shared/configuration.service';
@Component({
  selector: 'app-configuration-item',
  templateUrl: './configuration-item.component.html',
  styleUrls: ['./configuration-item.component.css']
})
export class ConfigurationItemComponent implements OnInit {
  ls: any[] = [1, 2, 3];
  pop = false;
  pop1 = false;
  /***********************************/
  configuration: any[] = [];
  isLoadingResults = true;
  /*********************/
  selectedId: number;
  @Input() data: any;
  @Input() id: any;
  configurations;
  @Input() config: any[];
  @Output() applyToggle = new EventEmitter();
  private link = '';
  private link2 = '';
  private link3 = '';

  confirm() {
    this.pop = true;
  }
  confirm1() {
    this.pop1 = true;
  }

  constructor(private api: ConfigurationService, private router: Router) {
  }

  // constructor(){}
  go(c) {
    // this.router.navigateByUrl('configuration/edit');
  }

  ngOnInit() {
    // this.heroes$ = this.router.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //     return this.service.getStudents();
    //   })
    // );
    // this.configurations = this.configurationService.getConfiguration();
    this.link = this.data.landingPageBG;
    this.link2 = this.data.logo;
    this.link3 = this.data.appBackground;
    this.load();
    this.load2();
  }

  load() {
    // this.for1();
    if (this.data.landingPageBG === '') {
      this.link = 'http://via.placeholder.com/350x250';
    }
  }

  load2() {
    // console.log(this.link2);
    if (this.data.logo === '') {
      this.link = 'http://via.placeholder.com/350x250';
    }
  }

  for1() {
    // for (let i = 0, len = this.data.length; i < len; i++) {
    //   console.log('lol' + this.data.logo);
    // }
    this.data = JSON.stringify(this.data);
    this.data.forEach((keys: any, vals: any) => {
      if (vals === '') {
        console.log(vals.logo, keys);
      }
    });
  }

// this.link = this.data.landingPageBG;
// this.link2 = this.data.logo;
  // load2() {
  //   if (this.data.logo !== '') {
  //     this.link2 = this.data.logo;
  //     console.log(this.link2);
  //   } else {
  //     this.link2 = 'http://via.placeholder.com/350x250';
  //   }
  // }
  /****function getById ******/
  getConfigDetails(id) {
    this.api.getConfiguration(id)
      .subscribe(data => {
        this.configurations = data;
        console.log(this.configurations);
        this.isLoadingResults = false;
      });
  }

  apply() {
    this.applyToggle.emit();
  }
}
