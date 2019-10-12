import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaService} from '../../shared/media.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {
  @Input() data: any[];
  media: { title: string; friendlyName: string; description: string; pictUrl: string; fileUrls: string; externalUrl: string; bConfidential: boolean; bFav: boolean; fileType: string; tags: string; date: DateConstructor; id: string };
  isLoadingResults = false;
  imgURL: string | ArrayBuffer = 'https://mdbootstrap.com/img/Photos/Slides/2.jpg';
  fichier: string | ArrayBuffer;
  private file: File;
  private fileName = '';
  private fileName2 = '';
  private  url1 = '';
  private  url2 = '';
  private  ud = '';
  validT = new Set();
  // private image: '' ;
  constructor( private http: HttpClient, private router: Router, private  api: MediaService, private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    //
    // getBackground(image  :any){
    //   return this._sanitizer.bypassSecurityTrustStyle(` url(${this.image})`);
    // }
  }
  ngOnInit() {
    this.getMedia(this.route.snapshot.params.id);
    this.media = {title: '', friendlyName: '', pictUrl: '', description: '', fileUrls: '', externalUrl: '', bConfidential: false, bFav: false, fileType: '', tags: '', date: Date, id: ''};
  }
  validEtat(obj) {
    if (obj) {
      if (obj.valid === true) {
        this.validT.delete(obj.field);
      } else {
        this.validT.add(obj.field);
      }
    }
    console.log(obj, this.validT);

  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.fileName = this.file.name;
      const reader = new FileReader();
      reader.onload = (even: any) => {
        this.url2 = even.target.result;
        this.imgURL = reader.result;
      };
      reader.readAsDataURL(this.file);
      console.log(this.file);
      this.url2 = event.target.result;
    }
  } onFileChange2(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.fileName2 = this.file.name;
      const reader = new FileReader();
      reader.onload = (even: any) => {
        this.url1 = even.target.result;
        this.fichier = reader.result;
      };
      reader.readAsDataURL(this.file);
      console.log(this.file);
      this.url1 = event.target.result;
    }
  }
  onFormSubmit() {
    console.log('vvvvv');
    if (typeof this.fichier === 'string') {
      this.media.fileUrls = this.fichier;
      this.media.fileType = this.fileName2;
    }
    if (typeof this.imgURL === 'string') {
      console.log(this.imgURL);
      this.media.pictUrl = this.imgURL;
    }
    this.api.addMedia(this.media)
      .subscribe(res => {
        // this.onSubmit();
      this.media.id = res.id;
        // const name = form.value.name;
        this.isLoadingResults = false;
        this.router.navigate(['/medias']);
        console.log('bb1');
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  onFormUpdate() {
    if (typeof this.fichier === 'string') {
      this.media.fileUrls = this.fichier;
      this.media.fileType = this.fileName2;
    }
    console.log(this.media.id);

    if (typeof this.imgURL === 'string') {
      console.log('rrrrrrrr' + this.imgURL);
      this.media.pictUrl = this.imgURL;
    }
    this.api.updateMedia(this.media.id, this.media)
      .subscribe(res => {
        // this.onSubmit();
        // const id = res.id;
        // const name = form.value.name;
        this.isLoadingResults = false;
        this.router.navigate(['/medias']);
        console.log('bb1');
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  goBack() {
    this.router.navigate(['/medias']);    console.log( 'goBack()...' );
  }

  private getMedia(id: any) {
    this.ud = id;
    if (id) {
    this.api.getMedia(id).subscribe(data => {
      this.media.id = data.id;
      this.media.title = data.title;
      this.media.friendlyName = data.friendlyName;
      this.media.pictUrl = data.pictUrl;
      console.log('u' + data.pictUrl);
      // this.media.pictUrl = this.sanitization.bypassSecurityTrustStyle(`url(${data.pictUrl})`) as string;
      this.media.description = data.description;
      this.media.fileUrls = data.fileUrls;
      this.media.externalUrl = data.externalUrl;
      // this.media.externalUrl = String(data.bConfidential);
      this.media.bFav = data.bFav;
      this.media.bConfidential = data.bConfidential;
      // this.media.date = data.date;
      if
      (data.pictUrl !== '') {

        this.imgURL = data.pictUrl;
      }
      if
      (data.fileUrls !== '') {

        this.fileName2 = data.fileType;
      }
    }); }
  }

}
