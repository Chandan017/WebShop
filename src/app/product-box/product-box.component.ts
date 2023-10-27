import { Component, Input } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  @Input() product!:ProductModel;

}
