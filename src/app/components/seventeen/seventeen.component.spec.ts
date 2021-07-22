/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeventeenComponent } from './seventeen.component';

describe('SeventeenComponent', () => {
  let component: SeventeenComponent;
  let fixture: ComponentFixture<SeventeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
