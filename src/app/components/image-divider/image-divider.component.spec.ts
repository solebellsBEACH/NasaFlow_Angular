import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDividerComponent } from './image-divider.component';
import { ImageDividerDataList } from '../../shared/constants/imageDivider';

describe('ImageDividerComponent', () => {
  let component: ImageDividerComponent;
  let fixture: ComponentFixture<ImageDividerComponent>;
  const imageDividerData = ImageDividerDataList[0]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageDividerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageDividerComponent);
    component = fixture.componentInstance;
    component.data = imageDividerData
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing data props', () => {

    it('should contain card data title', () => {
      const compiled = fixture.nativeElement.textContent;
      expect(compiled).toContain(imageDividerData.title);
    });

    it('should contain card data description', () => {
      const compiled = fixture.nativeElement.textContent;
      expect(compiled).toContain(imageDividerData.description);
    });

  })

});
