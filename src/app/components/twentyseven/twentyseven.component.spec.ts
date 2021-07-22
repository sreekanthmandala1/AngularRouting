/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwentysevenComponent } from './twentyseven.component';

describe('TwentysevenComponent', () => {
  let component: TwentysevenComponent;
  let fixture: ComponentFixture<TwentysevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentysevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentysevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
