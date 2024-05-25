import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolarSystemsComponent } from './our-solar-systems.component';

describe('OurSolarSystemsComponent', () => {
  let component: OurSolarSystemsComponent;
  let fixture: ComponentFixture<OurSolarSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSolarSystemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSolarSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
