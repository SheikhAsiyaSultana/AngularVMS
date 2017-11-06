import { Component, OnInit } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
public vendor:Vendor[];
public temp:Vendor[];

  constructor(private http:Http) { 
       this.vendor=[];
       this.temp=[];
       }
    
  ngOnInit() {
  }
  searchByCategory(sf){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('category', sf.value.category);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});	
  this.http.get('http://localhost:8080/vendor/app/category',options)
   .subscribe( 
       (data) => {
         if(data || data.json() !="undefined" ){
          this.vendor=data.json();
          this.temp=this.vendor;
          console.log(data.json());
          }
          else{
              console.log("Vendors data not found!!!!!!! ");
          }
   },
      (err) => console.log(err)
    );
    sf.reset();   
  }
 
}
