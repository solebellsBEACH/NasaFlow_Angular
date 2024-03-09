import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private windowWidthSubject: BehaviorSubject<number>;
  windowWidth$: Observable<number>;

  constructor() {
    if (typeof window !== 'undefined') {
      this.windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);
      this.windowWidth$ = this.windowWidthSubject.asObservable();
      this._setupResizeListener();
    } else {
      this.windowWidthSubject = new BehaviorSubject<number>(0);
      this.windowWidth$ = of(0); // Emitir um valor inicial de 0 para windowWidth$ em ambientes não-browser
    }
  }

  private _setupResizeListener(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        if (typeof window !== 'undefined') {
          this.windowWidthSubject.next(window.innerWidth);
        }
      });
  }

  compareResolutionThan(resolution: number): Observable<boolean> {
    return this.windowWidth$.pipe(map(windowWidth => !(windowWidth >= resolution)));
  }
}
