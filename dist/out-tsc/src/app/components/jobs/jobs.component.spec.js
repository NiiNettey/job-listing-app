import { TestBed } from '@angular/core/testing';
import { JobsComponent } from './jobs.component';
describe('JobsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [JobsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(JobsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jobs.component.spec.js.map