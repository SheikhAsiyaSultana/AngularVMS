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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

constructor(private http: Http) { }
   

  ngOnInit() {
  }
  updateVendor(uf){

         let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let cpParams = new URLSearchParams();
        cpParams.set('id', uf.value.id);
        let options = new RequestOptions({ headers: cpHeaders,params: cpParams});
        //Creating new Vendor object by using name field(ngModel)
        let id=uf.value.id;
        let name = uf.value.name;
        let category=uf.value.category;
        let startDate= uf.value.startDate;
        let endDate= uf.value.endDate;
        let resourceCount=uf.value.resourceCount;
        let billRate=uf.value.billRate;
        let status=uf.value.status;
        let address=uf.value.address;
        let number1=uf.value.number1;
        let number2=uf.value.number2;
        let remarks=uf.value.remarks;
        let ratings=uf.value.ratings;

        let vendor= new Vendor(id, name, category,startDate,endDate,resourceCount,billRate,status,address,number1,number2,remarks,ratings);    
        
        this.http.put('http://localhost:8080/vendor/app', JSON.stringify(vendor), options)
            .subscribe(response => {

                console.log(response.json());
            });
            uf.reset();
    }

  }

   
  