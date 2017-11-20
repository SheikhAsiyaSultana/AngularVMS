import { Component, OnInit } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Vendor } from '../vendor';
import { StatusService } from './status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [StatusService]//Providers should be there to access services
})

export class StatusComponent implements OnInit {

public vendor:Vendor[];

  constructor(private statusService:StatusService) {
        this.vendor=[];
      }

  ngOnInit() {
  }

  searchByStatus(stf){
  this.vendor=[];
  let status=stf.value.status;
  this.statusService.searchByStatus(status)
   .subscribe( data => {
          this.vendor=data;
          console.log(this.vendor);
          },     
      (err) => console.log(err));
      stf.reset();
  }

}
