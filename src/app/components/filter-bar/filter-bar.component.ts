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

  removeTag(index: number): void {
    this.jobSearchService.myTags.splice(index, 1); // Remove the tag at the given index
  }

  clearTags(): void {
    this.jobSearchService.myTags = []; // Clear all tags
  }
}
