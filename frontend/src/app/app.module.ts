import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from "@angular/common";
import { NavbarClientComponent } from "./core/components/navbar-client/navbar-client.component";
import { SharedButtonPrimaryComponent } from './shared/components/shared-button-primary/shared-button-primary.component';
import { SharedButtonInverseComponent } from './shared/components/shared-button-inverse/shared-button-inverse.component';
import { ProductDetailsCardComponent } from './features/commerce/components/product-details-card/product-details-card.component';
import { SharedProductCategoryComponent } from './shared/components/shared-product-category/shared-product-category.component';
import { ProductDetailsComponent } from './features/commerce/pages/product-details/product-details.component';
import { ProductCatalogComponent } from './features/commerce/pages/product-catalog/product-catalog.component';
import { SharedSearchBarComponent } from './shared/components/shared-search-bar/shared-search-bar.component';
import { ProductCatalogCardComponent } from './features/commerce/components/product-catalog-card/product-catalog-card.component';
import { SharedButtonLoadMoreComponent } from './shared/components/shared-button-load-more/shared-button-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarClientComponent,
    SharedButtonPrimaryComponent,
    SharedButtonInverseComponent,
    ProductDetailsCardComponent,
    SharedProductCategoryComponent,
    ProductDetailsComponent,
    ProductCatalogComponent,
    SharedSearchBarComponent,
    ProductCatalogCardComponent,
    SharedButtonLoadMoreComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
