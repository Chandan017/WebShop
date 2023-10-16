import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  @Output() columsCountChange = new EventEmitter<number>();

  sort = '';
  itemCount = 12;
  colNumber = 1;

  sortUpdated(newValue:string)
  {
    this.sort = newValue;
  }

  onItemUpdated(count:number)
  {
      this.itemCount = count;
  }

  onColumnUpdated(colNum:number)
  {
    this.columsCountChange.emit(colNum);
  }

}
