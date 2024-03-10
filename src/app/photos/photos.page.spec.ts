import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { PhotosPage } from './photos.page';

describe('PhotosPage', () => {
    let component: PhotosPage;
    let fixture: ComponentFixture<PhotosPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotosPage],
            imports: [IonicModule.forRoot(), ListPhotosComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
