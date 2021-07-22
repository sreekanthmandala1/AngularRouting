/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SixteenComponent } from './sixteen.component';

describe('SixteenComponent', () => {
  let component: SixteenComponent;
  let fixture: ComponentFixture<SixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
