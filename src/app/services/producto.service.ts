import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private http = inject(HttpClient);


  private API_PRODUCTS = 'https://ea-store-fa5cb-default-rtdb.firebaseio.com/productos';

  constructor() { }

  // READ: Obtener todos los productos
  getProductos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API_PRODUCTS}.json`);
  }

  // Crear un nuevo producto
  postProducto(producto: any): Observable<any> {
    return this.http.post<any>(`${this.API_PRODUCTS}.json`, producto);
  }

  // Actualizar el estado de un producto
  putProducto(id: string | number, producto: any): Observable<any> {
    return this.http.put<any>(`${this.API_PRODUCTS}/${id}.json`, producto);
  }

  //  Eliminar un registro de la base de datos
  deleteProducto(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.API_PRODUCTS}/${id}.json`);
  }
}