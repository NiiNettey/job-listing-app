import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { JobsComponent } from "./components/jobs/jobs.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  imports: [RouterOutlet, HeaderComponent, JobsComponent, CardComponent, FilterBarComponent]
})
export class AppComponent {
  title = 'job-listing-app';
}
