import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolarSystemCardComponent } from './our-solar-system-card.component';

describe('OurSolarSystemCardComponent', () => {
  let component: OurSolarSystemCardComponent;
  let fixture: ComponentFixture<OurSolarSystemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSolarSystemCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OurSolarSystemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
