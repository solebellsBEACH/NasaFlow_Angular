import { Injectable } from "@angular/core"
import { textFormattedUtils } from "../../../../shared/utils/textFormatted"

@Injectable()
export class ImageOfDayService {
  private readonly _widthDivisorRelation = 1.3
  private readonly _marginValuePX = 48
  private readonly _widthDifference = 326
  private readonly _mobileBreakpoint = 0

  constructor(
  ) { }

  getFormattedPreviewText(text: string, windowWidth: number): string {
    if ((this.getWidthByLength(text.length) + this._marginValuePX) > windowWidth) {
      const idealLength = this.getIdealLength(windowWidth)
      return textFormattedUtils.truncateText(text, idealLength)
    }
    return text
  }

  getContentTextWidth(text: string): string {
    return `${this.getWidthByLength(text.length)}px`
  }

  getIdealLength(windowWidth: number): number {
    return this.getIdealWidth(windowWidth) / this._widthDivisorRelation
  }

  getIdealWidth(windowWidth: number): number {
    return windowWidth - this._widthDifference;
  }

  getWidthByLength(length: number): number {
    return length * this._widthDivisorRelation
  }
}
