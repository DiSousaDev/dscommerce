import { Injectable } from '@angular/core';
import { Product } from "../../core/models/product.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, EMPTY, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  private url = `${environment.api}/products`;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  findAll(size: number, page: number, sort: string, valueSearch: string) {
    const options = {
      params: new HttpParams()
        .set('size', size)
        .set('page', page)
        .set('sort', sort)
        .set('name', valueSearch)
    };
    return this.httpClient.get<any>(this.url, options);
  }

  findById(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      catchError(() => {
        this.router.navigate(["/products/catalog"]);
        return EMPTY
      })
    );
  }

}
