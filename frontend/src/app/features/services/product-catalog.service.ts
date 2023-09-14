import { Injectable } from '@angular/core';
import { Product } from "../../core/models/product.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, EMPTY, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ProductCatalogService {

    private url = `${environment.api}/products`;
    private urlSize12 = `${environment.api}/products?size=12`;

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
    }

    findAll() {
        return this.httpClient.get<any>(this.urlSize12);
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
