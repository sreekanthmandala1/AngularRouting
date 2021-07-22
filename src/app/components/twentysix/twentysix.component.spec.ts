/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwentysixComponent } from './twentysix.component';

describe('TwentysixComponent', () => {
  let component: TwentysixComponent;
  let fixture: ComponentFixture<TwentysixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentysixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentysixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
