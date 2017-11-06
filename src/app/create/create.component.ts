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

  constructor(private http: Http) { }

  ngOnInit() {
  }
   registerVendor(f){
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: cpHeaders
        });
        //Creating new Vendor object by using name field(ngModel)
        let name = f.value.name;
        let category=f.value.category;
        let startDate= f.value.startDate;
        let endDate= f.value.endDate;
        let resourceCount=f.value.resourceCount;
        let billRate=f.value.billRate;
        let status=f.value.status;
        let address=f.value.address;
        let number1=f.value.number1;
        let number2=f.value.number2;
        let remarks=f.value.remarks;
        let ratings=f.value.ratings;

        let vendor= new Vendor(null, name, category,startDate,endDate,resourceCount,billRate,status,address,number1,number2,remarks,ratings);    
        
        this.http.post('http://localhost:8080/vendor/add', JSON.stringify(vendor), options)
            .subscribe(response => {

                console.log(response.json());
            });
            f.reset();
    }

}
