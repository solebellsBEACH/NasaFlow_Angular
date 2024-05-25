import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, map, of } from 'rxjs';

import { NewsBlockOverlayComponent } from './news-block-overlay.component';
import { NewsContentModule } from '../../news-content.module';
import { ApplicationService } from '../../../../../../services/application/application.service';

describe('NewsBlockOverlayComponent', () => {
  let component: NewsBlockOverlayComponent;
  let fixture: ComponentFixture<NewsBlockOverlayComponent>;
  let service: ApplicationService;
  let windowWidthSubjectMock: BehaviorSubject<number>;

  beforeEach(async () => {
    windowWidthSubjectMock = new BehaviorSubject<number>(0);

    await TestBed.configureTestingModule({
      imports: [
        NewsContentModule,
      ],
      providers: [
        {
          provide: ApplicationService,
          useValue: {
            windowWidth$: windowWidthSubjectMock.asObservable(),
            compareResolutionThan: (resolution: number) => windowWidthSubjectMock.asObservable().pipe(
              map(windowWidth => !(windowWidth >= resolution))
            )
          }
        }
      ]
    })
      .compileComponents();

    service = TestBed.inject(ApplicationService);
    fixture = TestBed.createComponent(NewsBlockOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('Overlay functions', () => {
  //   it('should show Open Topic if onFocus is false', (done) => {
  //     windowWidthSubjectMock.next(500);
  //   });
  // });
});
