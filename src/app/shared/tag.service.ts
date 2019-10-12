import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse ,  } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Tag} from '../tag';
// const apiUrl = 'https://configuration.free.beeceptor.com/my/api/config' ;
const apiUrl = 'http://localhost:3000/tag' ;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set('x-mobile-token', 'xxxxx')
};
@Injectable({
  providedIn: 'root'
})
export class TagService {


  constructor(private http: HttpClient) { }
  private handleData(res: any) {
    const body = res.json();
    console.log(body); // for development purposes only
    return body.result || body || { };
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(apiUrl )
      .pipe(
        map((data: any) => data) ,
        tap(heroes => console.log('fetched products', heroes)),
        catchError(this.handleError('getTags', []))
      );
  }

  getTag(id: number): Observable<Tag> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Tag>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Tag>(`getTag id=${id}`))
    );
  }

  addTag(product): Observable<Tag> {
    return this.http.post<Tag>(apiUrl, product, httpOptions).pipe(
      tap((configuration: Tag) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Tag>('addTag'))
    );
  }

  updateTag(id, tag): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, tag, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateTag'))
    );
  }

  deleteTag(id): Observable<Tag> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Tag>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted CONFIGURATION id=${id}`)),
      catchError(this.handleError<Tag>('deleteProduct'))
    );
  }

  /************************************************************/
}
