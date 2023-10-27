import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ProductModel } from 'src/app/product-model';
const ROWS_HEIGHT:{[id:number]:number} = {1:400 , 3:335 , 4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category : string | undefined;

  productList!: ProductModel[];


  constructor(private ds:DataServiceService) {

    this.ds.getProducts().subscribe((res) =>
    {
      this.productList = res;
      console.log(res);
    })
   
  }
  columsCountChange(colNum:number)
  {
    this.cols = colNum;
    this.rowHeight = ROWS_HEIGHT[this.cols]
    
  }

  sortUpdated(sortParameter:string)
  {
    // console.log(sortParameter)
    this.ds.getProductsBySort(sortParameter).subscribe((res) => 
    {
      this.productList = res;
    })
    
  }

  onShowCategory(newCategory : string)
  {
    console.log(newCategory)
    this.ds.getProductsByCategory(newCategory).subscribe((res) => 
    {
      this.productList = res;
    })
    this.category = newCategory;
  }


}
