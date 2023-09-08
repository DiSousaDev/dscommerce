import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSearchBarComponent } from './shared-search-bar.component';

describe('SharedSearchBarComponent', () => {
  let component: SharedSearchBarComponent;
  let fixture: ComponentFixture<SharedSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedSearchBarComponent]
    });
    fixture = TestBed.createComponent(SharedSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
