import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  @Output() columsCountChange = new EventEmitter<number>();
  @Output() sortUpdated = new EventEmitter<string>();
  // @Output() sortUpdated = new EventEmitter<string>();

  sort = '';
  itemCount = 12;
  colNumber = 1;

  // onSortUpdated(sortParameter:string)
  // {
  //   // console.log(sortParameter)
  //   this.sortUpdated.emit(sortParameter);
  // }

  onItemUpdated(count:number)
  {
      this.itemCount = count;
  }

  onColumnUpdated(colNum:number)
  {
    
    this.columsCountChange.emit(colNum);
  }

  onSortUpdated(sortParameter:string)
  {
    this.sortUpdated.emit(sortParameter);
  }

}
