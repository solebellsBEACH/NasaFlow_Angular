import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

@NgModule({
  declarations: [TruncateTextPipe],
  imports: [CommonModule],
  exports: [TruncateTextPipe],
  providers: [TruncateTextPipe]
})
export class SharedModule { }
