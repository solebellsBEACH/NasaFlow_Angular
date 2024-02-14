import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfDayComponent } from './image-of-day.component';

describe('ImageOfDayComponent', () => {
  let component: ImageOfDayComponent;
  let fixture: ComponentFixture<ImageOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageOfDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
