import { Component } from '@angular/core';
import { AssetsLinks } from '../../shared/constants/links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nasaLogoSrc = AssetsLinks.nasaLogo
}
