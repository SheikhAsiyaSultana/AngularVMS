import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {Vendor} from '../vendor'

@Injectable()
export class ViewService {

     constructor(private http:Http) { 
    }

   
  getAllVendors():Observable<Vendor[]>{
        return this.http.get('http://localhost:8080/vendor/allVendors')
	       .map((res:Response) => res.json());
        }

   getVendorByName(name:string):Observable<Vendor>{
   	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let cpParams = new URLSearchParams();
	cpParams.set('name',name);			
	let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
	return this.http.get('http://localhost:8080/vendor/app/name', options)
		.map((res:Response) => res.json());
   }
}
