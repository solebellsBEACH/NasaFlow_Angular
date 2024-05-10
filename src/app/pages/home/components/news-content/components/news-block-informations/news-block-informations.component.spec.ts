import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockInformationsComponent } from './news-block-informations.component';

describe('NewsBlockInformationsComponent', () => {
  let component: NewsBlockInformationsComponent;
  let fixture: ComponentFixture<NewsBlockInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBlockInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsBlockInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
