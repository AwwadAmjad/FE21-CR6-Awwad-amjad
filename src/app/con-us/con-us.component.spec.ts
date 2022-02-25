import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConUsComponent } from './con-us.component';

describe('ConUsComponent', () => {
  let component: ConUsComponent;
  let fixture: ComponentFixture<ConUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
