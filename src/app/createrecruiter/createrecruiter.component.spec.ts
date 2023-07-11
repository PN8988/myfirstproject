import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecruiterComponent } from './createrecruiter.component';

describe('CreaterecruiterComponent', () => {
  let component: CreaterecruiterComponent;
  let fixture: ComponentFixture<CreaterecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaterecruiterComponent]
    });
    fixture = TestBed.createComponent(CreaterecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
