import { Component, OnInit} from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { ViewService } from './view.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
   providers: [ViewService]
})
export class ViewComponent implements OnInit {
   public vendor:Vendor;
   public vendorName:Array<string> = [];
   public name:string;
   public allVendors:Vendor[];

   constructor(private viewService:ViewService) { 
         this.name='';
       }
    
//Data Consumption using Observable
  ngOnInit() {
      
      this.viewService.getAllVendors()
      .subscribe( 
       (res) => {
            this.allVendors=res;
            for(let vname of this.allVendors){
            this.vendorName.push(vname.name); //Pushing all available vendor names into an array of strings
            console.log(this.vendorName);
          }
         },
      (err) => console.log(err)
    );
  }

  searchByName(sf){
   this.vendor=null;
   let name=sf.value.name;
   this.viewService.getVendorByName(name)
   .subscribe( 
       (res) => {
          this.vendor=res;
          console.log(this.vendor);
          },
      (err) => console.log(err)
    );
    sf.reset(); 
  }

}

