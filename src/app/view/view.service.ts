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

  updateVendor(vendor:Vendor,vId:any):Observable<number> {
  let cpHeaders1 = new Headers({ 'Content-Type': 'application/json' });
  let cpParams1 = new URLSearchParams();
  cpParams1.set('id',vId);
  let options1 = new RequestOptions({ headers: cpHeaders1, params: cpParams1 });
  return this.http.put('http://localhost:8080/vendor/app', vendor, options1)
               .map(success => success.status);
    } 

    deleteVendor(name:string): Observable<number>{
     let cpHeaders2 = new Headers({ 'Content-Type': 'application/json' });
     let cpParams2 = new URLSearchParams();
    cpParams2.set('name', name);      
    let options2 = new RequestOptions({ headers: cpHeaders2, params: cpParams2 });
    return this.http.delete('http://localhost:8080/vendor/app/byName', options2)
         .map(success => success.status);
    }

   }
