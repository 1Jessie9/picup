import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumPage } from './album.page';
import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { AlbumPageRoutingModule } from './album-routing.module';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ListPhotosComponentModule,
        AlbumPageRoutingModule,
        HeaderComponentModule,
    ],
    declarations: [AlbumPage]
})
export class AlbumPageModule { }
