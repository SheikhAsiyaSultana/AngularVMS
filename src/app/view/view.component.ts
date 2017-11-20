import { Component, OnInit} from '@angular/core';
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
   public category:Array<string> = [];
   public name:string;
   public allVendors:Vendor[];
   public vId:any;
   public statusCode: number;
   public vName:string;
   public vCategory:string;
   public cNumber:any;
   public emailId:string;
   public add1:string;
   public add2:string;
   public sdate:string;
   public edate:string;
   public rec:number;
   public stat:string;
   public ufile:string;
   public comm:string;

   constructor(private viewService:ViewService) { 
         this.name='';
         this.category=["Food","General","HR","IT","Others"];
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
          this.vId=this.vendor.id;
          this.vName=this.vendor.name;
          this.vCategory=this.vendor.category;
          this.cNumber=this.vendor.number;
          this.emailId=this.vendor.emailId;
          this.add1=this.vendor.address1;
          this.add2=this.vendor.address2;
          this.sdate=this.vendor.startDate;
          this.edate=this.vendor.endDate;
          this.rec=this.vendor.resourceCount;
          this.stat=this.vendor.status;
          this.ufile=this.vendor.files;
          this.comm=this.vendor.comment;

          console.log(this.vendor);
          },
      (err) => console.log(err)
    );
    sf.reset(); 
  }

  updateVendor(uf){
        //Creating new Vendor object by using name field(ngModel)
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
        let vendor= new Vendor(this.vId, name, category,emailId,startDate,endDate,resourceCount,status,address1,number,address2,files,comment);     
        
        this.viewService.updateVendor(vendor,this.vId)
            .subscribe(successCode => {
            this.statusCode = successCode;
            },
          (err) => console.log(err)
          );
            uf.reset();
    }

   checkCategory(uf){
     if (uf.value.category=="HR")
       return false;
      else
       return true; 
   }

   //Delete vendor details
    deleteVendor(df){
         let name=df.value.name;
         this.viewService.deleteVendor(name)
           .subscribe(successCode => {
            this.statusCode = successCode;
            console.log(this.statusCode);
       },
        (err) => console.log(err));
        df.reset(); 
    }    

}

