import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContentComponent } from './news-content.component';
import { GitHubLinks } from '../../../../shared/constants/links';
import { NewsBlockContentComponent } from './components/news-block-content/news-block-content.component';
import { TruncateTextPipe } from '../../../../shared/pipes/truncate-text.pipe';
import { NewsBlockInformationsComponent } from './components/news-block-informations/news-block-informations.component';

describe('NewsContentComponent', () => {
  let component: NewsContentComponent;
  let fixture: ComponentFixture<NewsContentComponent>;

  const urlTest = "https://urlTest.com"

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsContentComponent,
        NewsBlockContentComponent,
        TruncateTextPipe,
        NewsBlockInformationsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain a link to "More NASA news" with the correct URL', () => {
  //   const compiled = fixture.nativeElement;
  //   const link = compiled.querySelector('a');
  //   expect(link).toBeTruthy();
  //   expect(link.textContent.trim()).toEqual('More NASA news');
  //   expect(link.href).toEqual(GitHubLinks.nasaFlow);
  // });

  // it('should navigate to the correct URL when the link is clicked', () => {
  //   component.moreNasaNewsLink = urlTest;
  //   const compiled = fixture.nativeElement;
  //   const link = compiled.querySelector('a');
  //   const spy = spyOn(window, 'open').and.callFake(() => null);
  //   link.click();
  //   expect(spy).toHaveBeenCalledWith(urlTest, '_blank');
  // });

});
