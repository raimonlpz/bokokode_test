import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/interfaces';


@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  @Input() featuredProduct!: Product | undefined;

  constructor() {}
}
