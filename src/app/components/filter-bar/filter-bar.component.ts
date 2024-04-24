import { Component } from '@angular/core';
import { JobSearchService } from '../../services/job-search.service';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

  constructor(public jobSearchService: JobSearchService){
  }

}
