import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupCompanyComponent } from './lookup-company.component';

describe('LookupCompanyComponent', () => {
  let component: LookupCompanyComponent;
  let fixture: ComponentFixture<LookupCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupCompanyComponent]
    });
    fixture = TestBed.createComponent(LookupCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
