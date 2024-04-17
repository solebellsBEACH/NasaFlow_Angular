import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockContentComponent } from './news-block-content.component';

describe('NewsBlockContentComponent', () => {
  let component: NewsBlockContentComponent;
  let fixture: ComponentFixture<NewsBlockContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBlockContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsBlockContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
