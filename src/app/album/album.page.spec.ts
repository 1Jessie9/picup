import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { AlbumPage } from './album.page';

describe('AlbumPage', () => {
    let component: AlbumPage;
    let fixture: ComponentFixture<AlbumPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlbumPage],
            imports: [IonicModule.forRoot(), ListPhotosComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AlbumPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
