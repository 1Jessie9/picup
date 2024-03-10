import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosPage } from './photos.page';
import { ListPhotosComponentModule } from '../list-photos/list-photos.module';

import { PhotosPageRoutingModule } from './photos-routing.module';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ListPhotosComponentModule,
        PhotosPageRoutingModule,
        HeaderComponentModule
    ],
    declarations: [PhotosPage]
})
export class PhotosPagePageModule { }
