import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfDayComponent } from './image-of-day.component';
import { Store, StoreModule } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
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
});
