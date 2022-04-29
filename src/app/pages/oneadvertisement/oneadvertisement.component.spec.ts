import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneadvertisementComponent } from './oneadvertisement.component';

describe('OneadvertisementComponent', () => {
  let component: OneadvertisementComponent;
  let fixture: ComponentFixture<OneadvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneadvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
