import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { PhotoService } from '../services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IPhoto } from '../interfaces/photo.interface';
import { IAlbum } from '../interfaces/album.interface';

@Component({
    selector: 'app-album',
    templateUrl: 'album.page.html',
    styleUrls: ['album.page.scss']
})
export class AlbumPage implements OnInit {
    @ViewChild(IonModal) modal!: IonModal;
    private albumId: string = "";
    public nameAlbum: string = "Álbum";
    public modalEnabled: boolean = false;
    public selectedPhotos: IPhoto[] = [];
    public photosAlbum: IPhoto[] = [];

    constructor(
        public albumsService: AlbumsService,
        public photoService: PhotoService,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public modalController: ModalController,
    ) {
        this.activatedRoute.params.subscribe(async params => {
            if (params['albumId']) this.albumId = params['albumId'];

            if (!this.albumId) this.router.navigateByUrl('/');
        });
    }

    async ngOnInit() {
        await this.getInfoAlbum();
        await this.getPhotosByAlbum();
    }

    async getInfoAlbum() {
        const infoAlbum: IAlbum | null = await this.albumsService.getAlbumById(this.albumId);
        if (infoAlbum) {
            this.nameAlbum = infoAlbum.name;
        }
    }

    async getPhotosByAlbum() {
        this.photosAlbum = await this.photoService.getPhotosByAlbum(this.albumId);
    }

    async addPhotoToAlbum() {
        await this.photoService.getPhotosCache();
    }

    async addNewPhoto() {
        await this.photoService.addNewPhoto();
    }

    cancel() {
        this.modalController.dismiss();
    }

    async confirm() {
        await this.photoService.addPhotosToAlbum(this.selectedPhotos, this.albumId);
        await this.getPhotosByAlbum();
        this.modalController.dismiss();
    }

    async changeSelectedPhotos(photos: IPhoto[]) {
        this.selectedPhotos = photos;
    }

    async deletedPhoto(photo: IPhoto) {
        this.photoService.deletePhotoAlbum(photo.filepath);
        await this.getPhotosByAlbum();
    }
}
