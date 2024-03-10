import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';

@Component({
    selector: 'app-albums',
    templateUrl: 'albums.page.html',
    styleUrls: ['albums.page.scss']
})
export class AlbumsPage implements OnInit {

    constructor(
        public albumsService: AlbumsService,
    ) { }

    async ngOnInit() {
        await this.getAlbums();
    }

    async getAlbums () {
        this.albumsService.getAlbums();
    }
}
