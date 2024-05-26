import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolarSystemsComponent } from './our-solar-systems.component';
import { OurSolarSystemCardComponent } from './components/our-solar-system-card/our-solar-system-card.component';

describe('OurSolarSystemsComponent', () => {
  let component: OurSolarSystemsComponent;
  let fixture: ComponentFixture<OurSolarSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSolarSystemsComponent, OurSolarSystemCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OurSolarSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Our Solar System title', () => {
    const compiled = fixture.nativeElement.textContent;
    expect(compiled).toContain('Our Solar System');
  });

  it('should contain app-our-solar-system-card', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-our-solar-system-card')).toBeTruthy();
  });
});
