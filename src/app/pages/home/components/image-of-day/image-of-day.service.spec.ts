import { TestBed } from '@angular/core/testing';
import { ImageOfDayService } from './image-of-day.service';

describe('ImageOfDayService', () => {
  let service: ImageOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageOfDayService]
    });
    service = TestBed.inject(ImageOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return length multiplicated to widthDivisorRelation', () => {
    expect(service.getWidthByLength(10)).toEqual(14);
  });

  it('should return length multiplicated to widthDivisorRelation with px to scss', () => {
    expect(service.getContentTextWidth('0123456789')).toEqual('14px');
  });

  it('should return ideal width to the content text to 768px resolution', () => {
    expect(service.getIdealWidth(768)).toEqual(442);
  });

  it('should return ideal width to the content text to 1024px resolution', () => {
    expect(service.getIdealWidth(1024)).toEqual(698);
  });

});
