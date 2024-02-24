import { Injectable } from '@angular/core';

@Injectable()
export class ImageOfDayService {
  private readonly _widthDivisorRelation = 1.3

  constructor() { }

  getLearningMoreMaxHeight(): number {
    return 10
  }

  getFormattedPreviewText(text: string): string {
    return text
  }

  getContentTextWidth(text: string): string {
    return `${this._getWidthByLength(text.length)}px`
  }

  private _getWidthByLength(length: number): number {
    return length * this._widthDivisorRelation
  }
}
