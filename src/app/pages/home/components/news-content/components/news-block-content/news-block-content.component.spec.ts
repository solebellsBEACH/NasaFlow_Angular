import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockContentComponent } from './news-block-content.component';
import { NewsBlockInformationsComponent } from '../news-block-informations/news-block-informations.component';
import { TruncateTextPipe } from '../../../../../../shared/pipes/truncate-text.pipe';

describe('NewsBlockContentComponent', () => {
  let component: NewsBlockContentComponent;
  let fixture: ComponentFixture<NewsBlockContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBlockContentComponent, NewsBlockInformationsComponent, TruncateTextPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsBlockContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-news-block-informations', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-news-block-informations')).toBeTruthy();
  });
});
