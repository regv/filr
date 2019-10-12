import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../../shared/tag.service';
import {Tag} from '../../Tag';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  @Input() data: any[];
  validT = new Set();
  tag = new Tag();
  // tag: { title: string; bgColor: string; bMaster: boolean; date: DateConstructor; id: string };
  public message: string;
  isLoadingResults = false;
  private voteQuestion: any;
  private landingPageBG: any;
  private ud = '';
  updateId = '';
  valid: boolean;
  bTitle = true;

  constructor(private http: HttpClient, private router: Router, private  api: TagService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.updateId
    this.getTag(this.route.snapshot.params.id);
    // this.tag = {title: '', bgColor: '', bMaster: false, date: Date, id: ''};
  }

  onFormSubmit() {
    console.log('clicked test');
        this.api.addTag(this.tag)
          .subscribe(res => {
            // this.onSubmit();
            const id = res.id;
            // const name = form.value.name;
            this.isLoadingResults = false;
            this.router.navigate(['/tags']);
            console.log('bb1');
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          });
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

  onFormUpdate() {

    this.api.updateTag(this.tag.id, this.tag)
      .subscribe(res => {
        // this.onSubmit();
        // const id = res.id;
        // const name = form.value.name;
        this.isLoadingResults = false;
        this.router.navigate(['/tags']);
        console.log('bb1');
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  goBack() {
    this.router.navigate(['/tags']);
    console.log('goBack()...');
  }

  private getTag(id: any) {
    this.ud = id;
    if (id && id !== '') {
      this.api.getTag(id).subscribe(data => {
        this.tag.id = data.id;
        this.tag.title = data.title;
        this.tag.bgColor = data.bgColor;
        this.tag.bMaster = data.bMaster;
        this.tag.bMaster = data.bMaster;
      });
    }
  }
}
