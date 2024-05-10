import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-block-informations',
  templateUrl: './news-block-informations.component.html',
  styleUrl: './news-block-informations.component.scss'
})
export class NewsBlockInformationsComponent implements OnInit {
  @Input() hasReadTime: boolean = false;

  data = {
    readTime: 3,
    title: 'NASA Expedition 71 Astronauts to Conduct Research aboard Space Station',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/12/main_image-83.jpg?w=4096&format=jpeg'
  }


  ngOnInit(): void { }

}
