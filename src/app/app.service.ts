import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
   apiurl = 'http://54.202.218.249:9501/api/v1/user';

  constructor( private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('https://api.myjson.com/bins/dfm7w');
  }

}