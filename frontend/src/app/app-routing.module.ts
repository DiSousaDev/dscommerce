import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from "./features/commerce/pages/product-catalog/product-catalog.component";
import { ProductDetailsComponent } from "./features/commerce/pages/product-details/product-details.component";
import { LoginComponent } from "./features/auth/pages/login/login.component";
import { ProductCartComponent } from "./features/commerce/pages/product-cart/product-cart.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products/catalog',
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
    path: 'products/details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: ProductCartComponent
  },
  {
    path: '**',
    redirectTo: '/products/catalog',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
