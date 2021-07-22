/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwentytwoComponent } from './twentytwo.component';

describe('TwentytwoComponent', () => {
  let component: TwentytwoComponent;
  let fixture: ComponentFixture<TwentytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
