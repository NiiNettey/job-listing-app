import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { JobDataService } from '../../services/job-data.service';
import { Job } from '../../interface/interface';
import { JobSearchService } from '../../services/job-search.service';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-jobs',
    standalone: true,
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    imports: [CardComponent]
})
export class JobsComponent {

  constructor(public jobData: JobDataService){}

}
