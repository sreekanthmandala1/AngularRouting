/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageFourteenComponent } from './pageFourteen.component';

describe('PageFourteenComponent', () => {
  let component: PageFourteenComponent;
  let fixture: ComponentFixture<PageFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
