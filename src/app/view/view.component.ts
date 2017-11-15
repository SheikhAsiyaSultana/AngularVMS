import { Component, OnInit} from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   public vendor:Vendor;
  errMsg:boolean;
  public vendorName:any[] = [];
   arrayOfStrings:any[];
   public allVendors:Vendor[];
   constructor(private http:Http) { 
       
       }
    
  ngOnInit() {
    this.getAllVendors();
  }
  getAllVendors(){
     this.http.get('http://localhost:8080/vendor/allVendors')
   .subscribe( 
       (data) => {
         if(data || data.json() != null){
          this.allVendors=data.json();

          for(let vname of this.allVendors){
            this.vendorName.push(vname.name); 
            console.log(this.vendorName);
          }



          //this.vendorName = this.allVendors.name;
          //console.log(this.vendorName);
          }
          else{
          console.log("No Vendors Found!!!!!!");
          }
   },
      (err) => console.log(err)
    );
  }

  searchByName(sf){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('name', sf.value.name);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});  
  this.http.get('http://localhost:8080/vendor/app/name',options)
   .subscribe( 
       (data) => {
         if(data || data.json() != null){
          this.vendor=data.json();
          //this.vendorName = this.vendor.name;
          //console.log(this.vendorName);
          console.log(this.vendor);
          }
          else{
          console.log("No Vendors Found!!!!!!");
          }
   },
      (err) => console.log(err)
    );
    sf.reset();   
  }

 
}

