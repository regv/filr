import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse ,  } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Media} from '../media';
// const apiUrl = 'https://configuration.free.beeceptor.com/my/api/config' ;
const apiUrl = 'http://localhost:3000/media' ;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set('x-mobile-token', 'xxxxx')
};
@Injectable({
  providedIn: 'root'
})
export class MediaService {


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

  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(apiUrl )
      .pipe(
        map((data: any) => data) ,
        tap(heroes => console.log('fetched products', heroes)),
        catchError(this.handleError('getMedias', []))
      );
  }

  getMedia(id: number): Observable<Media> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Media>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Media>(`getMedia id=${id}`))
    );
  }

  addMedia(product): Observable<Media> {
    return this.http.post<Media>(apiUrl, product, httpOptions).pipe(
      tap((media: Media) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Media>('addMedia'))
    );
  }

  updateMedia(id, configuration): Observable<any> {
    const url = `${apiUrl}/${id}`;
    console.log(`fffffff ${id}`);
    return this.http.put(url, configuration, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteMedia(id): Observable<Media> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Media>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted CONFIGURATION id=${id}`)),
      catchError(this.handleError<Media>('deleteProduct'))
    );
  }

  /************************************************************/
}
