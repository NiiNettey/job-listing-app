import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FilterBarComponent = class FilterBarComponent {
    constructor(jobSearchService) {
        this.jobSearchService = jobSearchService;
    }
    removeTag(index) {
        this.jobSearchService.myTags.splice(index, 1); // Remove the tag at the given index
    }
    clearTags() {
        this.jobSearchService.myTags = []; // Clear all tags
    }
};
FilterBarComponent = __decorate([
    Component({
        selector: 'app-filter-bar',
        standalone: true,
        imports: [],
        templateUrl: './filter-bar.component.html',
        styleUrl: './filter-bar.component.css'
    })
], FilterBarComponent);
export { FilterBarComponent };
//# sourceMappingURL=filter-bar.component.js.map