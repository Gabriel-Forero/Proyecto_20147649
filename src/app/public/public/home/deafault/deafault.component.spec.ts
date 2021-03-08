import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafaultComponent } from './deafault.component';

describe('DeafaultComponent', () => {
  let component: DeafaultComponent;
  let fixture: ComponentFixture<DeafaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeafaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeafaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
