import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../shared/configuration.service';
import {Student} from '../../students';
import {Configuration} from '../../configuration';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit {
  constructor(private rentailService: ConfigurationService,
              private api: ConfigurationService,
              private route: ActivatedRoute,
              private router: Router) { }
  ls: any[] = [1];
  searchText;
  // configuration = new Configuration();
  students: Student[] = [];
  // configuration: any[] = [];
  configuration: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'logo', 'device'];
  isLoadingResults = true;
// config: { id: string; name: string }[] = [
//   {id: '1' , name: 'iheb'},
// ];
  skills = [
    {name: 'angular'},
    {name: 'react'},
    {name: 'vue'},
    {name: 'javascript'},
    {name: 'c#'},
    {name: 'css'},
  ];
  // address: any = {street: 'rue du Paradis', city: '75010 Paris'};
  configurations: any = [];
  ngOnInit() {
    // this.configurations = this.rentailService.someMethod();
    // this.students = this.rentailService.getStudents();
    this.api.getConfigurations()
      .subscribe( (res: Configuration[]) => {
        this.configurations = res;
        console.log(this.configurations);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    // this.getConfigDetails(this.route.snapshot.params.id);
  }

  // Selection(id: string) {
  //   //   this.categories.forEach(x => {
  //   //     if (x.id !== id) {
  //   //       x.value = !x.value;
  //   //       // this.api.updateConfigurationt(id, this.configuration).subscribe();
  //   //     }
  //   //   });
  // }
  // Selection(id: string) {
  //   console.log(id, this.configurations);
  //   this.configurations.forEach(x => {console.log(x);
  //                                     if (x.id !== id && x.bApplied === true) {
  //       x.bApplied =  false;
  //     }
  //     // this.api.updateConfigurationt(id, this.configurations).subscribe();  //TODO
  //   });
  // }


  ApplyConfiguration(configuration, id) {
    this.configurations.forEach(x => {
      if (x.id !== configuration.id && x.bApplied === true) {
        x.bApplied =  false;
      }
      // this.getConfiguration(id);
      // this.api.updateConfigurationt(id, this.configuration).subscribe();
    });
  }
  // private getConfiguration(id: any) {
  //   // this.ud = id;
  //   this.api.getConfiguration(id).subscribe(data => {
  //     this.configuration.bApplied = Boolean(data.bApplied);
  //   });
  // }
}
