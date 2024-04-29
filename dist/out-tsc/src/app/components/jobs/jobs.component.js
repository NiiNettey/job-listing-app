import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
let JobsComponent = class JobsComponent {
    constructor(jobData) {
        this.jobData = jobData;
    }
};
JobsComponent = __decorate([
    Component({
        selector: 'app-jobs',
        standalone: true,
        templateUrl: './jobs.component.html',
        styleUrl: './jobs.component.css',
        imports: [CardComponent]
    })
], JobsComponent);
export { JobsComponent };
//# sourceMappingURL=jobs.component.js.map