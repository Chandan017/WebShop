import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() showCategory = new EventEmitter<string>();
  categories:string[] = ['sports' , 'shoes'];

  
  constructor(private ds:DataServiceService) {
    this.ds.getCategories().subscribe((categoriesList) =>
    {
      this.categories = categoriesList;
    })
  
    
  }


  onShowCategory(category:string)
  {
    
    this.showCategory.emit(category);
  }

}
