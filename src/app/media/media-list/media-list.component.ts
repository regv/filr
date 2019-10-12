import { Component, OnInit } from '@angular/core';
import {Student} from '../../students';
import {ActivatedRoute, Router} from '@angular/router';
import {Media} from '../../media';
import {MediaService} from '../../shared/media.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  ls: any[] = [1];
  searchText;
  students: Student[] = [];
  // configuration: any[] = [];
  media: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'logo', 'device'];
  isLoadingResults = true;
// config: { id: string; name: string }[] = [
//   {id: '1' , name: 'iheb'},
// ];
  medias: any = [];
  constructor(private rentailService: MediaService,
              private api: MediaService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    // this.configurations = this.rentailService.someMethod();
    // this.students = this.rentailService.getStudents();
    this.api.getMedias()
      .subscribe( (res: Media[]) => {
        this.medias = res;
        console.log(this.medias);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    // this.getConfigDetails(this.route.snapshot.params.id);
  }

  // /***********function delete configuration******/
  // deleteProduct(id) {
  //   this.isLoadingResults = true;
  //   this.api.deleteConfiguration(id)
  //     .subscribe(res => {
  //         this.isLoadingResults = false;
  //         this.router.navigate(['/configuration']);
  //       }, (err) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       }
  //     );
  // }
}
