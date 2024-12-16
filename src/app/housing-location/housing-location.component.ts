import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `<section class="listing">
    <img
      src="{{ housingLocation.photo }}"
      alt="Exterior photo of {{ housingLocation.name }}"
      crossorigin
      class="listing-photo"
    />
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">
      {{ housingLocation.city }}, {{ housingLocation.state }}
    </p>
  </section>`,
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  // console.log('====================================');
  // console.log(housingLocation);
  // console.log('====================================');
}
