import { Component, Input } from '@angular/core';
import { IImageDividerData } from '../../shared/interfaces/components/home/image-divider.interface';

@Component({
  selector: 'app-image-divider',
  templateUrl: './image-divider.component.html',
  styleUrl: './image-divider.component.scss'
})
export class ImageDividerComponent {

  @Input() data!: IImageDividerData;

}
