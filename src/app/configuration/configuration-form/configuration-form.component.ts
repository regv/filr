import {Component, Input, OnInit} from '@angular/core';
import {ConfigurationService} from '../../shared/configuration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Configuration} from '../../configuration';
import {FileHolder} from 'angular2-image-upload';
import {HttpClient} from '@angular/common/http';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {MediaService} from '../../shared/media.service';
import {Media} from '../../media';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css'],
  // viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective }]
  // providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ConfigurationFormComponent implements OnInit {
  @Input() data: any[];
  Tmedia: Array<any> = [];
  checked: boolean;
  validT = new Set(); // validation array
  configuration: { name: string; device: string; msgWelcome: string; emailUrl: string; landingPageBG: string; voteQuestion: string; logo: string; footerText: string; id: string; bEnableFavs: boolean; bEnableSession: boolean; bAllowVoting: boolean; bApplied: boolean; bStats: boolean;  bAllowAnonUsers: boolean; statsUrl: string,  appBackground: string };
  imgURL: string | ArrayBuffer = 'https://mdbootstrap.com/img/Photos/Slides/2.jpg'; // logo
  imgURL2: string | ArrayBuffer = 'https://mdbootstrap.com/img/Photos/Slides/2.jpg'; // accuile
  imgURL3: string | ArrayBuffer = 'https://mdbootstrap.com/img/Photos/Slides/2.jpg';  // landing
  public message: string;
  isLoadingResults = false;
  private voteQuestion: any;
  private landingPageBG: any;
  private file: File;
  valid = true;
  private fileName2 = '';
  private title: boolean;
  private  url1 = '';
  private  url2 = '';
  private  ud = '';
  updateId = '';
  nest: any = [];
  private Prime: Array<any> = [];
  Tarrah: Array<any> = [];

  // private  t = RegExp(this.pat);
  constructor( private http: HttpClient, private router: Router, private  api: ConfigurationService, private  api2: MediaService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.updateId;
    this.getConfiguration(this.route.snapshot.params.id);
    this.configuration = {
      name: '',
      device: '',
      msgWelcome: '',
      emailUrl: '',
      landingPageBG: '',
      voteQuestion: '',
      logo: '',
      footerText: '',
      id: '',
      bEnableFavs: false,
      bEnableSession: false,
      bAllowVoting: false,
      bApplied: false,
      bStats: false,
      bAllowAnonUsers: false,
      statsUrl: '',
      appBackground: '',
    };
    // get media in config
    this.getNestedData(this.route.snapshot.params.id);
    // get media
    this.api2.getMedias().subscribe( res => {
      this.Prime.push(res);
      console.log('eeee', this.Prime);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    console.log('gap', this.Prime, this.Tarrah);
    this.nest  = JSON.stringify(this.Tarrah)
    console.log('tytyyt', this.nest);

  }
  // logo
    onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
     this.file = event.target.files[0];
     // this.fileName = this.file.name;
     const reader = new FileReader();
     reader.onload = (even: any) => {
        this.url2 = even.target.result;
        this.imgURL = reader.result;
      };
     reader.readAsDataURL(this.file);
     // console.log(this.file);
     this.url2 = event.target.result;
    }
  }
  validEtat(obj) {
    if (obj) {
      if (obj.valid === true) {
        this.validT.delete(obj.field);
      } else {
        this.validT.add(obj.field);
      }
    }
    // console.log(obj, this.validT);

  }
  // mapping nested data
  // cloneArray(x) {
  //   return JSON.parse(JSON.stringify(x)); // returns Array
  // }
  private getNestedData(id: any) {
    this.api.getConfiguration(id).subscribe(data => {
      // data.m(r => this.ConfMedias = r.medias);
      // data.medias.map(r =>  this.Tarrah.push(r));
      // regularUrls = regularUrls.concat(region.damageDetails.map(damage => damage.regularUrl));
      // this.Tarrah = this.Tarrah.concat(data.medias.map(damage => damage));
      this.Tarrah.push(data.medias);
    });
    console.log( 'b', this.Tarrah);
  }
  // acuuile
  onFileChange2(event) {
    if (event.target.files && event.target.files[0]) {
     this.file = event.target.files[0];
     this.fileName2 = this.file.name;
     const reader = new FileReader();
     reader.onload = (even: any) => {
        this.url1 = even.target.result;
        this.imgURL2 = reader.result;
      };
     reader.readAsDataURL(this.file);
     // console.log(this.file);
     this.url1 = event.target.result;
    }
  }
  /*****landing**/
  onFileChange3(event) {
    if (event.target.files && event.target.files[0]) {
     this.file = event.target.files[0];
     this.fileName2 = this.file.name;
     const reader = new FileReader();
     reader.onload = (even: any) => {
        this.url1 = even.target.result;
        this.imgURL3 = reader.result;
      };
     reader.readAsDataURL(this.file);
     // console.log(this.file);
     this.url1 = event.target.result;
    }
  }
  // [ngModel]="configuration?.logo" (ngModelChange)="configuration.logo = $event"
  onFormSubmit() {
      // this.configuration.logo = this.url1;
      // this.configuration.landingPageBG = this.url2;
    if (typeof this.imgURL === 'string') {
      this.configuration.logo = this.imgURL;
    }
    if (typeof this.imgURL3 === 'string') {
      this.configuration.landingPageBG = this.imgURL3;
    }
    if (typeof this.imgURL2 === 'string') {
      this.configuration. appBackground = this.imgURL2;
    }
    // console.log(this.valid);
    if (this.valid === true) {
    // console.log('fll:' + JSON.stringify (this.configuration.landingPageBG));
    this.api.addConfiguration(this.configuration)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/configurations']);
        // console.log('bb1');
      }, (err) => {
        // console.log(err);
        this.isLoadingResults = false;
      }); } else  {  this.router.navigate(['/tags']); }
  }
  onFormUpdate() {
    // this.configuration.landingPageBG = this.url2;
    if (typeof this.imgURL === 'string') {
      this.configuration.logo = this.imgURL;
    }
    if (typeof this.imgURL3 === 'string') {
      this.configuration.landingPageBG = this.imgURL3;
    }
    if (typeof this.imgURL2 === 'string') {
      this.configuration. appBackground = this.imgURL2;
    }
    console.log('fll:' + JSON.stringify (this.configuration.landingPageBG));
    this.api.updateConfigurationt(this.configuration.id, this.configuration)
      .subscribe(res => {
        // this.onSubmit();
        // const id = res.id;
        // const name = form.value.name;
        this.isLoadingResults = false;
        this.router.navigate(['/configurations']);
        console.log('bb1');
      }, (err) => {
        // console.log(err);
        this.isLoadingResults = false;
      });
  }

  goBack() {
    this.router.navigate(['/configurations']);    console.log( 'goBack()...' );
  }

  private getConfiguration(id: any) {
    this.ud = id;
    if (id) {
    this.api.getConfiguration(id).subscribe(data => {
      this.configuration.id = data.id;
      this.configuration.name = data.name;
      this.configuration.device = data.device;
      this.configuration.emailUrl = data.emailUrl;
      this.configuration.msgWelcome = data.msgWelcome;
      this.configuration.voteQuestion = data.voteQuestion;
      this.configuration.bStats = Boolean(data.bStats);
      this.configuration.bAllowAnonUsers = Boolean(data.bAllowAnonUsers);
      this.configuration.bAllowVoting = Boolean(data.bAllowVoting);
      this.configuration.bEnableSession = Boolean(data.bEnableSession);
      this.configuration.bApplied = Boolean(data.bApplied);
      this.configuration.bEnableFavs = Boolean(data.bEnableFavs);
      this.configuration.footerText = data.footerText;
      this.configuration.statsUrl = data.statsUrl;
      // this.fileName = 'ffffff';
      // console.log('gggg' + JSON.stringify(data));
      // this.configuration.logo = data.logo;
      // this.imgURL = data.landingPageBG;
      if
      (data.logo !== '') {

        this.imgURL2 = data.logo;
      }
      if
      (data. appBackground !== '') {

        this.imgURL3 = data.appBackground;
      }
      if
      (data.landingPageBG !== '') {

        this.imgURL = data.landingPageBG;
      }
    }); } else {return; }
  }
  // private getMedias(id: any) {
  //   this.api.getConfiguration(id).subscribe(data => {
  //     // data.m(r => this.ConfMedias = r.medias);
  //     // data.medias.map(r =>  this.Tmedia.push(r)); // important field
  //   });
  //   console.log( this.Tmedia);
  // }
}
