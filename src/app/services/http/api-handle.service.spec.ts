import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiHandleService } from './api-handle.service';


describe('ApiHandleService', () => {
  let service: ApiHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ApiHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing createURL method', () => {
    const url = service.createURL("https://api.nasa.gov/", "route", "123456")
    expect(url).toBe("https://api.nasa.gov/route?api_key=123456")
  });

  it('should create HttpParams with no params', () => {
    const params = service.createParams();
    expect(params.keys().length).toEqual(0);
  });

  it('should create HttpParams with empty params object', () => {
    const params = service.createParams({});
    expect(params.keys().length).toEqual(0);
  });

  it('should create HttpParams with params object', () => {
    const params = { key1: 'value1', key2: 'value2' };
    const httpParams = service.createParams(params);
    expect(httpParams.get('key1')).toEqual('value1');
    expect(httpParams.get('key2')).toEqual('value2');
  });
});
