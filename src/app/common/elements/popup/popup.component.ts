import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigurationService} from '../../../shared/configuration.service';
import {TagService} from '../../../shared/tag.service';
import {MediaService} from '../../../shared/media.service';
import {Configuration} from '../../../configuration';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() child = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<string>();
  isHidden = false;
  @Input() component: string;
  @Input() data: any;
  @Input() name: string;
  @Input() Id: string;
  isLoadingResults = true;
  configuration = new Configuration();
  constructor(private route: ActivatedRoute, private api: ConfigurationService, private router: Router,  private api2: TagService, private api3: MediaService) { }
  ngOnInit() {
  }
  /*reload url*/
  redirectTo() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/' + this.component + 's']));
  }
  // reloadComponent() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate(['/' + this.component + 's'], {
  //     replaceUrl: true
  //   });
  click() {
    this.child.emit(false);
  }
  cloneArray(x) {
    return JSON.parse(JSON.stringify(x)); // returns Array
  }
  deleteP(id, c) {
    // id = this.Id;
    if (c === 'configuration') {
    this.isLoadingResults = true;
    this.api.deleteConfiguration(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.redirectTo();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }
    if (c === 'tag') {
      this.isLoadingResults = true;
      this.api2.deleteTag(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            // this.router.navigate(['/tags']);
            this.redirectTo();
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
    if (c === 'media') {
      this.isLoadingResults = true;
      this.api3.deleteMedia(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            // this.router.navigate(['/tags']);
            this.redirectTo();
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
    this.child.emit(false);
  }
  duplicate(dup: any) {
    // this.configuration = this.cloneArray(dup);
    delete dup.id;
    dup.bApplied = false;
    // dup.put(dup.bApplied, false);
    this.configuration = dup;
    console.log(this.configuration);
    this.api.addConfiguration(dup)
      .subscribe(res => {
        // this.onSubmit();
        const id = res.id;
        // const name = form.value.name;
        this.isLoadingResults = false;
        this.redirectTo();
        console.log('bb1');
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
    this.child.emit(false);

  }
}
