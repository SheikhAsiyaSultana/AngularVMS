import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

 statusCode: number;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  //Delete vendor details
    deleteVendor(df){
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('name', df.value.name);      
    let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    this.http.delete('http://localhost:8080/vendor/app/byName', options)
           .subscribe(successCode => {
            this.statusCode = successCode.status;
            console.log(this.statusCode);
       },
       errorCode => this.statusCode = errorCode);
        df.reset(); 
    }    
  }
