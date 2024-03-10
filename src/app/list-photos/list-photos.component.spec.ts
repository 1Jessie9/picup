import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhotosComponent } from './list-photos.component';

describe('ListPhotosComponent', () => {
    let component: ListPhotosComponent;
    let fixture: ComponentFixture<ListPhotosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListPhotosComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ListPhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
