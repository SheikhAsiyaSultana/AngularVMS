import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ViewService } from './view.service';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[ViewService]
})
export class ViewComponent implements OnInit {

// vars
  private vendors: Vendor[];
  private _subscription;
  statusCode: number;
  
  // constructor
  constructor(private _viewService: ViewService) { 
   this.vendors=[];
    }

  // on-init
  ngOnInit() {
    // save _subscription
    this._subscription = this._viewService.getAllVendors()
      .subscribe(
      data => this.vendors = data,
      errorCode =>  this.statusCode = errorCode);
    }


  // on-destroy
  ngOnDestroy() {
    // unsubscribe
    this._subscription.unsubscribe();
  }
}
