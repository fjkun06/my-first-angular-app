import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: ` <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button type="button" class="primary">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location
        *ngFor="let hL of housingLocationList"
        [housingLocation]="hL"
      ></app-housing-location>
    </section>`,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
