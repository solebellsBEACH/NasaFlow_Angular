import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDividerComponent } from './image-divider.component';

describe('ImageDividerComponent', () => {
  let component: ImageDividerComponent;
  let fixture: ComponentFixture<ImageDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
