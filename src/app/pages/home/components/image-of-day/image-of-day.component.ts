import { Component } from '@angular/core';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss'
})
export class ImageOfDayComponent {
  url = "https://science.nasa.gov/wp-content/uploads/2024/02/grasshopper-eclipse-soundscapes.jpeg"
}
