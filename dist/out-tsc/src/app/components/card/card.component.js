import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
let CardComponent = class CardComponent {
    constructor(jobSearchService) {
        this.jobSearchService = jobSearchService;
    }
    getImageUrl(imageName) {
        return `../../../assets/${imageName}`;
    }
    jobMatchesTags(job) {
        const selectedTags = this.jobSearchService.myTags;
        if (selectedTags.length === 0) {
            return true;
        }
        else {
            return selectedTags.every((tag) => job.role === tag ||
                job.level === tag ||
                job.languages.includes(tag) ||
                job.tools.includes(tag));
        }
    }
    filterBarToggle(tag) {
        const index = this.jobSearchService.myTags.indexOf(tag);
        if (index === -1) {
            this.jobSearchService.myTags.push(tag);
        }
        else {
            this.jobSearchService.myTags.splice(index, 1);
        }
    }
};
__decorate([
    Input()
], CardComponent.prototype, "job", void 0);
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        standalone: true,
        imports: [NgClass, NgFor],
        templateUrl: './card.component.html',
        styleUrl: './card.component.css',
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map