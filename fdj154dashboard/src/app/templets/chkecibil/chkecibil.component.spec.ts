import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkecibilComponent } from './chkecibil.component';

describe('ChkecibilComponent', () => {
  let component: ChkecibilComponent;
  let fixture: ComponentFixture<ChkecibilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChkecibilComponent]
    });
    fixture = TestBed.createComponent(ChkecibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
