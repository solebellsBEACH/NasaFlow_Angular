import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockOverlayComponent } from './news-block-overlay.component';
import { NewsContentModule } from '../../news-content.module';

describe('NewsBlockOverlayComponent', () => {
  let component: NewsBlockOverlayComponent;
  let fixture: ComponentFixture<NewsBlockOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewsContentModule,
      ],
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
