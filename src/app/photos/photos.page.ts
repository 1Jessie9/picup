import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { IPhoto } from '../interfaces/photo.interface';

@Component({
    selector: 'app-photos',
    templateUrl: 'photos.page.html',
    styleUrls: ['photos.page.scss']
})
export class PhotosPage implements OnInit {

    constructor(
        public photoService: PhotoService,
    ) { }

    async ngOnInit() {
        await this.getPhotosUser();
    }

    async getPhotosUser() {
        await this.photoService.getPhotosCache();
    }

    async deletedPhoto(photo: IPhoto) {
        this.photoService.deletePhoto(photo.filepath);
    }
}
