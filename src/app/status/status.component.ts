import { Component, OnInit } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
public vendor:Vendor[];
showData:boolean;

  constructor(private http:Http) {
        this.vendor=[];
      }

  ngOnInit() {
     this.showData=false;
  }
  searchByStatus(status:string){
  	
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('status', status);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});	
  this.http.get('http://localhost:8080/vendor/app/status',options)
   .subscribe( data => {
    if(data || data.json() !="undefined" ){
          this.vendor=data.json();
          console.log(data.json());
          }
          else{
              console.log("Vendors data not found!!!!!!! ");
          }
          this.showData=true;
          //window.location.reload();
   },
   err =>{
   console.log("Data Not Found!!!!!");
   });
  }

}
