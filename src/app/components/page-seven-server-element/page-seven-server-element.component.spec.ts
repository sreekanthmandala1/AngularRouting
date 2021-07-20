import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSevenServerElementComponent } from './page-seven-server-element.component';

describe('PageSevenServerElementComponent', () => {
  let component: PageSevenServerElementComponent;
  let fixture: ComponentFixture<PageSevenServerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSevenServerElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSevenServerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
