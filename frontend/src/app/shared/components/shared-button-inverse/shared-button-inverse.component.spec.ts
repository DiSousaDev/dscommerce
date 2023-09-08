import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonInverseComponent } from './shared-button-inverse.component';

describe('SharedButtonInverseComponent', () => {
  let component: SharedButtonInverseComponent;
  let fixture: ComponentFixture<SharedButtonInverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedButtonInverseComponent]
    });
    fixture = TestBed.createComponent(SharedButtonInverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
