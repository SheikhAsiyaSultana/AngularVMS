import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {

     constructor(private http:Http) { 
    }

 searchByCategory(category:string){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('category', category);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});	
   return this.http.get('http://localhost:8080/vendor/app/category',options)
    .map((res:Response) => res.json());
    }
  }  