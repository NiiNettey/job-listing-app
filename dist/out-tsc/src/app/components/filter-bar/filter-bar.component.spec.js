import { TestBed } from '@angular/core/testing';
import { FilterBarComponent } from './filter-bar.component';
describe('FilterBarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FilterBarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FilterBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filter-bar.component.spec.js.map