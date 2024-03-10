import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsPage } from './albums.page';
import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { AlbumsPageRoutingModule } from './albums-routing.module';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ListPhotosComponentModule,
        AlbumsPageRoutingModule,
        HeaderComponentModule,
    ],
    declarations: [AlbumsPage]
})
export class AlbumsPageModule { }
