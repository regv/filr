import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, first, tap} from 'rxjs/operators';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  public connected$ = new BehaviorSubject<boolean>(false);
  // private config = 'https://jsonplaceholder.typicode.com/todos';
  public connState: boolean;
  private t: boolean;
  // private source = interval(3000);

  constructor(private http: HttpClient) {
  }
  // pingu(url): boolean {
  //   this.t = false;
  //   const url1 = `${url}`;
  //   if (url1 !== '') {
  //   this.http.get(url1, {observe: 'response'})
  //     .pipe(first())
  //     .subscribe(resp => {
  //       this.t = resp.status === 200;
  //     }) ; } else {}
  //   return this.t; }
}
