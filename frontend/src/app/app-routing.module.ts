import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from "./features/commerce/pages/product-catalog/product-catalog.component";
import { ProductDetailsComponent } from "./features/commerce/pages/product-details/product-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/catalog',
    pathMatch: 'full'
  },
  {
    path: 'products',
    redirectTo: 'products/catalog'
  },
  {
    path: 'products/catalog',
    component: ProductCatalogComponent
  },
  {
    path: 'products/details',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
