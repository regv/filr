import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Tag} from '../../Tag';
import {TagService} from '../../shared/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  ls: any[] = [1];
  searchText;
  configuration: any[] = [];
  isLoadingResults = true;

 tags: any = [];
  constructor(private rentailService: TagService,
              private api: TagService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    // this.configurations = this.rentailService.someMethod();
    // this.students = this.rentailService.getStudents();
    this.api.getTags()
      .subscribe( (res: Tag[]) => {
        this.tags = res;
        console.log(this.tags);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    // this.getConfigDetails(this.route.snapshot.params.id);
  }

  /***********function delete configuration******/
  deleteProduct(id) {
    this.isLoadingResults = true;
    this.api.deleteTag(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/tag']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
