import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonLoadMoreComponent } from './shared-button-load-more.component';

describe('SharedButtonLoadMoreComponent', () => {
  let component: SharedButtonLoadMoreComponent;
  let fixture: ComponentFixture<SharedButtonLoadMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedButtonLoadMoreComponent]
    });
    fixture = TestBed.createComponent(SharedButtonLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
