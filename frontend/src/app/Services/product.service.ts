import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Review } from '../review';
var reqHeader = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
});
const URL = 'http://localhost:5000/api/products/';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }
  getProductsByCategId(categId: Number): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}categId=${categId}`);
  }
  getProductById(Id: Number): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}id=${Id}`);
  }
  searchProductsByName(name: String): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}name=${name}`);
  }
  addComment(id: Number, body: Review): Observable<Product[]> {
    return this.http.put<Product[]>(`${URL}/comments/add/${id}`, body, {
      headers: reqHeader,
    });
  }
}