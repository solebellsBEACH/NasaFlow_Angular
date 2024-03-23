import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfDayComponent } from './image-of-day.component';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { IStore } from '../../../../shared/intefaces/store';
import { ImageOfDayService } from './image-of-day.service';
import { BehaviorSubject } from 'rxjs';
import { ResolutionBreakpoints } from '../../../../shared/constants/resolutionBreakpoints';
import mockData from '../../../../../mock/home/components/image-of-day.mock';
import { appReducer } from '../../../../root-store/app/app.reducer';
import { unitInitialStoreState } from '../../../../../mock/store/unitInitialState';


describe('ImageOfDayComponent', () => {
  let component: ImageOfDayComponent;
  let fixture: ComponentFixture<ImageOfDayComponent>;
  let store: Store<IStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageOfDayComponent],
      imports: [
        StoreModule.forRoot({ app: appReducer, }),
      ],
      providers: [
        ImageOfDayService,
        provideMockStore(
          {
            initialState: unitInitialStoreState
          }
        )
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(async () => {
      component.ngOnInit();
    })

    it('selectImageOfDayState$ should not be null', () => {
      component.selectImageOfDayState$.subscribe(state => {
        expect(state).not.toBeNull()
      })
    });

    it('selectImageOfDay$ should not be null', () => {
      component.selectImageOfDay$.subscribe(state => {
        expect(state).not.toBeNull()
      })
    });
  })

  it('should contain Learn Mode text', () => {
    const compiled = fixture.nativeElement.querySelector('h1');
    expect(compiled.textContent).toBe("To learn more, click below")
  });

  it('should contain learn more button', () => {
    const compiled = fixture.nativeElement.querySelector('button');
    expect(compiled.textContent).toBe("learn more")
  });

  it('should return explanation formatted', () => {
    component.windowWidth$ = new BehaviorSubject<number>(ResolutionBreakpoints.MD);
    expect(component.getTextFormatted(mockData.explanation.default)).toBe(mockData.explanation.formatted)
  });
});
