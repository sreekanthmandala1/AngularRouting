/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwentythreeComponent } from './twentythree.component';

describe('TwentythreeComponent', () => {
  let component: TwentythreeComponent;
  let fixture: ComponentFixture<TwentythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
