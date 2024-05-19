import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockInformationsComponent } from './news-block-informations.component';
import { TruncateTextPipe } from '../../../../../../shared/pipes/truncate-text.pipe';
import { INewsBlockInformationData } from '../../interfaces/NewsBlockInformation.interface';
import { NewsBlockOverlayComponent } from '../news-block-overlay/news-block-overlay.component';

describe('NewsBlockInformationsComponent', () => {
  let component: NewsBlockInformationsComponent;
  let fixture: ComponentFixture<NewsBlockInformationsComponent>;
  const data: INewsBlockInformationData = {
    readTime: 3,
    title: 'NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/12/main_image-83.jpg?w=4096&format=jpeg'
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewsBlockInformationsComponent,
        TruncateTextPipe,
        NewsBlockOverlayComponent
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsBlockInformationsComponent);
    component = fixture.componentInstance;
    component.data = data
    component.maxTitleLength = 80
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render timeRead', () => {
    const compiled = fixture.nativeElement.textContent;
    expect(compiled).toContain(data.readTime);
  })

  // describe('Testing truncate pipe', () => {

  //   it('should render text with 80 caracters', () => {
  //     const compiled = fixture.nativeElement.textContent;
  //     const truncatedText = "NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA E..."
  //     expect(compiled).toContain(truncatedText);
  //   })

  //   it('should render text with 100 characters', () => {
  //     component.maxTitleLength = 100;
  //     fixture.detectChanges();

  //     const compiled = fixture.nativeElement.textContent;
  //     const truncatedText = "NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astrona...";

  //     expect(compiled).toContain(truncatedText);
  //   });

  //   it('should render text without pipe if isMobile$', () => {
  //     component.isMobile$ = of(true)
  //     fixture.detectChanges();

  //     const compiled = fixture.nativeElement.textContent;
  //     expect(compiled).toContain(data.title);
  //   })
  // })
});
