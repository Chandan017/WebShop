import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

  getProducts()
  {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getCategories()
  {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getProductsByCategory(category : string)
  {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products/category/' + category);
  }

  getProductsBySort(sortParameter : string)
  {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products?sort=' + sortParameter);
  }
}
