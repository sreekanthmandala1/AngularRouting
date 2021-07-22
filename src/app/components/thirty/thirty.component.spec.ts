/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThirtyComponent } from './thirty.component';

describe('ThirtyComponent', () => {
  let component: ThirtyComponent;
  let fixture: ComponentFixture<ThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
