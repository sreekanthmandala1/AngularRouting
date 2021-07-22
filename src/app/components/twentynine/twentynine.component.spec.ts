/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwentynineComponent } from './twentynine.component';

describe('TwentynineComponent', () => {
  let component: TwentynineComponent;
  let fixture: ComponentFixture<TwentynineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentynineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentynineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
