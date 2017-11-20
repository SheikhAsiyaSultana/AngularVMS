import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class StatusService {

     constructor(private http:Http) { 
    }

 searchByStatus(status:string){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('status', status);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});	
   return this.http.get('http://localhost:8080/vendor/app/status',options)
    .map((res:Response) => res.json());
    }
  }  