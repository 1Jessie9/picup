import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { AlbumsPage } from './albums.page';

describe('AlbumsPage', () => {
    let component: AlbumsPage;
    let fixture: ComponentFixture<AlbumsPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlbumsPage],
            imports: [IonicModule.forRoot(), ListPhotosComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AlbumsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
