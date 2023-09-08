import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogCardComponent } from './product-catalog-card.component';

describe('ProductCatalogCardComponent', () => {
  let component: ProductCatalogCardComponent;
  let fixture: ComponentFixture<ProductCatalogCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatalogCardComponent]
    });
    fixture = TestBed.createComponent(ProductCatalogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
