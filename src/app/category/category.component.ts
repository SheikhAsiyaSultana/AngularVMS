import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
   providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

public vendors:Vendor[];

  constructor(private categoryService:CategoryService) { 
       this.vendors=[];
       }
    

  ngOnInit() {
  }

  searchByCategory(sf){
  this.vendors=[];
  let category=sf.value.category;
  this.categoryService.searchByCategory(category)
   .subscribe( 
       (res) => {
          this.vendors=res;
          console.log(this.vendors);
          
   },
      (err) => console.log(err)
    );
    sf.reset();   
  }
 
}
