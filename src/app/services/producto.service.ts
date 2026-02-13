import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private http = inject(HttpClient);


  private API_PRODUCTS = 'https://api.example.com/products';

  constructor() { }



  getProductos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_PRODUCTS);
  }
}