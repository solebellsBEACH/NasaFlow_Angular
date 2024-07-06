import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ImageOfDayComponent } from './components/image-of-day/image-of-day.component';
import { ImageOfDayService } from './components/image-of-day/image-of-day.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { unitInitialStoreState } from '../../../mock/store/unitInitialState';
import { TruncateTextPipe } from '../../shared/pipes/truncate-text.pipe';
import { NewsContentModule } from './components/news-content/news-content.module';
import { OurSolarSystemsModule } from './components/our-solar-systems/our-solar-systems.module';
import { ImageDividerComponent } from '../../components/image-divider/image-divider.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ImageOfDayComponent,
        TruncateTextPipe,
        ImageDividerComponent
      ],
      imports: [
        NewsContentModule,
        OurSolarSystemsModule
      ],
      providers: [
        provideMockStore({ initialState: unitInitialStoreState }),
        ImageOfDayService,
        TruncateTextPipe
      ],

    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing if has all home components', () => {

    it('should contain app-image-of-day', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-image-of-day')).toBeTruthy();
    });

    it('should contain app-news-content', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-news-content')).toBeTruthy();
    });

    it('should contain app-our-solar-systems', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-our-solar-systems')).toBeTruthy();
    });

    it('should contain app-image-divider', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('app-image-divider')).toBeTruthy();
    });

  })
});
