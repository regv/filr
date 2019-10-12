import { Injectable } from '@angular/core';
import {Observable, of, Subject, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse ,  } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Configuration} from '../configuration';
// const apiUrl = 'https://configuration.free.beeceptor.com/my/api/config' ;
const apiUrl = 'http://localhost:3000/configuration' ;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set('x-mobile-token', 'xxxxx')
};
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  students: ({ id: number; name: string; enrollmentnumber: number; college: string; university: string })[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
    {
      id: 2,
      name: 'Rushabh',
      enrollmentnumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU'
    },
    {
      id: 3,
      name: 'Ankit',
      enrollmentnumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU'
    }];

  private listConfig: ({ id: string; name: string; msgWelcome: string; logo: string; landingPageBG: string })[] = [
    {id: '1', name: 'bb 1', msgWelcome: 'merci bb', logo: 'bond', landingPageBG: ''},
      {id: '2', name: 'ch', msgWelcome: 'merci bb', logo: 'bond', landingPageBG: ''}
  ];
  private refreshNeeded$ = new Subject<void>();

  get refreshNeededs$() {
    return this.refreshNeeded$;
  }

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

  getConfigurations(): Observable<Configuration[]> {
    return this.http.get<Configuration[]>(apiUrl )
      .pipe(
        map((data: any) => data) ,
        tap(heroes => console.log('fetched products', heroes)),
        catchError(this.handleError('getConfigurations', []))
      );
  }

  getConfiguration(id: number): Observable<Configuration> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Configuration>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Configuration>(`getConfiguration id=${id}`))
    );
  }

  addConfiguration(product): Observable<Configuration> {
    return this.http.post<Configuration>(apiUrl, product, httpOptions).pipe(
      tap((configuration: Configuration) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Configuration>('addProduct'))
    );
  }

  updateConfigurationt(id, configuration): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, configuration, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteConfiguration(id): Observable<Configuration> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Configuration>(url, httpOptions).pipe(
      tap( () =>  this.refreshNeededs$.next()),
      catchError(this.handleError<Configuration>('deleteProduct'))
    );
  }

  /************************************************************/
  someMethod() {
    return 'Heya!';
  }
  public getStudents(): any {
    // const studentsObservable = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(this.students);
    //   }, 1000);
    // });

    return this.students;
  }



}
