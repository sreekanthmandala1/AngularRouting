import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSevenCockpitComponent } from './page-seven-cockpit.component';

describe('PageSevenCockpitComponent', () => {
  let component: PageSevenCockpitComponent;
  let fixture: ComponentFixture<PageSevenCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSevenCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSevenCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
