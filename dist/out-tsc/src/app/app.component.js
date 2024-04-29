import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { JobsComponent } from "./components/jobs/jobs.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'job-listing-app';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
        imports: [RouterOutlet, HeaderComponent, JobsComponent, CardComponent, FilterBarComponent]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map