import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecruiterComponent } from './updaterecruiter.component';

describe('UpdaterecruiterComponent', () => {
  let component: UpdaterecruiterComponent;
  let fixture: ComponentFixture<UpdaterecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdaterecruiterComponent]
    });
    fixture = TestBed.createComponent(UpdaterecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
