import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  getData = () => {

    // for Authorization
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ITlYEw_tHINpnTFAydn5'
      })
    }

    return this.http.get('https://the-one-api.dev/v2/movie', httpOptions)
    .pipe(catchError((error) => {
      console.log(error);
      return throwError(() => Error(`Error fetching cocktails`));
    }));
  }
}
