import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockOverlayComponent } from './news-block-overlay.component';

describe('NewsBlockOverlayComponent', () => {
  let component: NewsBlockOverlayComponent;
  let fixture: ComponentFixture<NewsBlockOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBlockOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsBlockOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
