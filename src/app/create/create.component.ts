import { Component, OnInit } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    URLSearchParams,
    RequestOptions
} from '@angular/http';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  category:string[];
  selectedCategory:string="Others";
  constructor(private http: Http) {
    this.category=["Food","General","HR","IT","Others"];
   }

  ngOnInit() {
  }

   checkCategory(f){
     if (f.value.category=="HR")
       return false;
      else
       return true; 
   }
   registerVendor(f){
   debugger;
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: cpHeaders
        });
        //Creating new Vendor object by using name field(ngModel)
        let name = f.value.name;
        let category=f.value.category;
        let number=f.value.number1;
        let emailId=f.value.email;
        let startDate= f.value.startDate;
        let endDate= f.value.endDate;
        let resourceCount=f.value.resourceCount;
        let status=f.value.status;
        let address1=f.value.address1;
        let address2=f.value.address2;
        let files=f.value.file;     
        let comment=f.value.comment;
      

        let vendor= new Vendor(null, name, category,emailId,startDate,endDate,resourceCount,status,address1,number,address2,files,comment);    
        
        this.http.post('http://localhost:8080/vendor/add', JSON.stringify(vendor), options)
            .subscribe(response => {

                console.log(response.json());
            });
            f.reset();
    }


}
