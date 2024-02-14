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

  it('should contain Learn Mode text', () => {
    const compiled = fixture.nativeElement.querySelector('h1');
    expect(compiled.textContent).toBe("To learn more, click below")
  });

  it('should contain learn more button', () => {
    const compiled = fixture.nativeElement.querySelector('button');
    expect(compiled.textContent).toBe("learn more")
  });
});
