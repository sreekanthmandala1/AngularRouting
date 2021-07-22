/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EighteenComponent } from './eighteen.component';

describe('EighteenComponent', () => {
  let component: EighteenComponent;
  let fixture: ComponentFixture<EighteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
