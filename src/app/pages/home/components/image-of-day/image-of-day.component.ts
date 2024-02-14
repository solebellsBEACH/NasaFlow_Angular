import { Component } from '@angular/core';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss'
})
export class ImageOfDayComponent {
  url = "https://apod.nasa.gov/apod/image/9801/sataurora_hst.jpg"
}
