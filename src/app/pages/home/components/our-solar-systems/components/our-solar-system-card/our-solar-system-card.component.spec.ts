import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolarSystemCardComponent } from './our-solar-system-card.component';
describe('OurSolarSystemCardComponent', () => {
  let component: OurSolarSystemCardComponent;
  let fixture: ComponentFixture<OurSolarSystemCardComponent>;
  const ourSolarSystemsCardData = {
    id: 1,
    name: 'Planets',
    imageUrl: 'https://urlImageTest.com',
    redirectUrl: 'https://urlTest.com'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSolarSystemCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OurSolarSystemCardComponent);
    component = fixture.componentInstance;
    component.cardData = ourSolarSystemsCardData
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing data props', () => {

    it('should contain card data', () => {
      const compiled = fixture.nativeElement.textContent;
      expect(compiled).toContain(ourSolarSystemsCardData.name);
    });

  })
});
