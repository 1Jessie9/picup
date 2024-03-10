import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AlbumsService } from '../services/albums.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public showAddPhotos: boolean = true;
    public alertButtons: string[] = ['¡Listo!'];
    public alertInputs = [
        {
            placeholder: 'Nombre...',
            attributes: {
                minlength: 2,
                maxlength: 30,
            },
        },
    ];
    constructor(
        public albumsService: AlbumsService,
        public photoService: PhotoService,
        public router: Router,
        public alertController: AlertController,
    ) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
            // no show o life-insurance
            const showAddPhotos = [
                '/tabs/photos',
            ];
            this.showAddPhotos = showAddPhotos.includes(event.url);
        });
    }

    async addNewPhoto() {
        await this.photoService.addNewPhoto();
    }

    async addNewAlbum() {
        console.log('here');
        let name: string = "";
        const alert = await this.alertController.create({
            header: 'Agrega un título',
            buttons: this.alertButtons,
            inputs: this.alertInputs,
        });
        alert.onDidDismiss().then(async ({ data }) => {
            console.log(data.values[0]);
            name = data.values[0];
            if (!name) this.addNewAlbum();
            if (name) {
                await this.albumsService.addNewAlbum(name);
            }
        });
        await alert.present();

    }
}
