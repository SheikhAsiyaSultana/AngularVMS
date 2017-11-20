import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';



@Injectable()
export class CreateService {

     constructor(private http:Http) { 
    }

   registerVendor(vendor: Vendor):Observable<number> {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: cpHeaders});
        return this.http.post('http://localhost:8080/vendor/add',vendor,options)
         .map(success => success.status);
        }
     }   