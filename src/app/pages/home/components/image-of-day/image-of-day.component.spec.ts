import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfDayComponent } from './image-of-day.component';
import { Store, StoreModule } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImagesOfDay } from '../../../../root-store/app/app.actions';
import { ImageOfDayService } from './image-of-day.service';


describe('ImageOfDayComponent', () => {
  let component: ImageOfDayComponent;
  let fixture: ComponentFixture<ImageOfDayComponent>;
  let store: Store<IStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageOfDayComponent],
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        ImageOfDayService
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

  it('should contain Learn Mode text', () => {
    const compiled = fixture.nativeElement.querySelector('h1');
    expect(compiled.textContent).toBe("To learn more, click below")
  });

  it('should contain learn more button', () => {
    const compiled = fixture.nativeElement.querySelector('button');
    expect(compiled.textContent).toBe("learn more")
  });

  // it('should dispatch loadGetImageOfDay action on ngOnInit', () => {
  //   // Call ngOnInit
  //   component.ngOnInit();

  //   // Expect that loadGetImageOfDay action is dispatched with correct parameters
  //   expect(store.dispatch).toHaveBeenCalledWith(loadGetImagesOfDay({ params: { count: 1 } }));
  // });
});
