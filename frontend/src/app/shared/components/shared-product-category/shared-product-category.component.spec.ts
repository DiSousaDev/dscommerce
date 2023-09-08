import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductCategoryComponent } from './shared-product-category.component';

describe('SharedProductCategoryComponent', () => {
  let component: SharedProductCategoryComponent;
  let fixture: ComponentFixture<SharedProductCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedProductCategoryComponent]
    });
    fixture = TestBed.createComponent(SharedProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
