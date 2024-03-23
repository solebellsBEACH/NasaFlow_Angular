import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiHandleService {

  private nasaUrl = "https://api.nasa.gov/"
  private apiKey = "PsgkzRbOk1CDAFnNYY7dnK3Wxkp7gybaHKFgclDP"

  constructor(public httpClient: HttpClient) { }

  Get(url: string, params?: any) {
    return this.httpClient
      .get(this.
        createURL(this.nasaUrl, url, this.apiKey), {
        params: this.
          createParams(params)
      })
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  HandleResponse(response: any) {
    if (response.status === 500) {
      alert('Ops, has a error here');
    }
  }

  createParams(params?: Object): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.append(key, value);
      });
    }
    return httpParams;
  }

  createURL(path: string, route: string, apiKey: string): string {
    return `${path}${route}?api_key=${apiKey}`
  }

}
