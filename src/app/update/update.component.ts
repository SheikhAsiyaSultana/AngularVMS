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
        let number=uf.value.number1;
        let startDate= uf.value.startDate;
        let endDate= uf.value.endDate;
        let resourceCount=uf.value.resourceCount;
        let emailId=uf.value.email;
        let status=uf.value.status;
        let address1=uf.value.address1;
        let address2=uf.value.address2;
        let files=uf.value.file;     
        let comment=uf.value.comment;

        let vendor= new Vendor(null, name, category,emailId,startDate,endDate,resourceCount,status,address1,number,address2,files,comment);     
        
        this.http.put('http://localhost:8080/vendor/app', JSON.stringify(vendor), options)
            .subscribe(response => {

                console.log(response.json());
            });
            uf.reset();
    }

  }

   
  