import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let JobSearchService = class JobSearchService {
    get myTags() {
        return this._myTags;
    }
    set myTags(value) {
        this._myTags = value;
        this.myTags$.next(this._myTags);
    }
    constructor() {
        this._myTags = [];
        this.myTags$ = new BehaviorSubject(this._myTags);
    }
};
JobSearchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], JobSearchService);
export { JobSearchService };
//# sourceMappingURL=job-search.service.js.map