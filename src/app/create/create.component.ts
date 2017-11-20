import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { CreateService } from './create.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
   providers: [CreateService]
})
export class CreateComponent implements OnInit {

  category:string[];
  selectedCategory:string="Others";
  public statusCode: number;
  constructor(private createService:CreateService) {
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
        
       this.createService.registerVendor(vendor)
            .subscribe(successCode => {
            this.statusCode=successCode;
            console.log( this.statusCode);
            },
            (err) => console.log(err));
            f.reset();
    }


}
