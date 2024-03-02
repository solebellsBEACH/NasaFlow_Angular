import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ImageOfDayComponent } from './components/image-of-day/image-of-day.component';
import { StoreModule } from '@ngrx/store';
import { ImageOfDayService } from './components/image-of-day/image-of-day.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ImageOfDayComponent],
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        ImageOfDayService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
