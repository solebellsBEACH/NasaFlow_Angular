import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);
  windowWidth$ = this.windowWidthSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      this.windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);
      this.windowWidth$ = this.windowWidthSubject.asObservable();
      this.setupResizeListener();
    }
  }

  private setupResizeListener(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.windowWidthSubject.next(window.innerWidth);
      });
  }
}
