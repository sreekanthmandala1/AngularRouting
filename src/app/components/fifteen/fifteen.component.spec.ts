/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FifteenComponent } from './fifteen.component';

describe('FifteenComponent', () => {
  let component: FifteenComponent;
  let fixture: ComponentFixture<FifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
