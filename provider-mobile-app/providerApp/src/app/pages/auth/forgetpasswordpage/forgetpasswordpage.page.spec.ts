import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordpagePage } from './forgetpasswordpage.page';

describe('ForgetpasswordpagePage', () => {
  let component: ForgetpasswordpagePage;
  let fixture: ComponentFixture<ForgetpasswordpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpasswordpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
