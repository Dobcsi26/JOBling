import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleadvertisementComponent } from './singleadvertisement.component';

describe('SingleadvertisementComponent', () => {
  let component: SingleadvertisementComponent;
  let fixture: ComponentFixture<SingleadvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleadvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
