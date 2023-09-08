import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonPrimaryComponent } from './shared-button-primary.component';

describe('SharedButtonPrimaryComponent', () => {
  let component: SharedButtonPrimaryComponent;
  let fixture: ComponentFixture<SharedButtonPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedButtonPrimaryComponent]
    });
    fixture = TestBed.createComponent(SharedButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
