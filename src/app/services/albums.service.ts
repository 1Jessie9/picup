import { Injectable } from '@angular/core';
import { IAlbum } from '../interfaces/album.interface';
import { Preferences } from '@capacitor/preferences';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    //Array de albums
    public albums: IAlbum[] = [];
    // Clave para almacenar y recuperar fotos del almacenamiento local.
    private readonly keyUserAlbums: string = "albums_user";

    constructor() { }

    // Guarda localmente el nuevo album y actualiza el almacenamiento local.
    public async addNewAlbum(name: string) {
        // Añade la foto al inicio del array de fotos.
        const newAlbum: IAlbum = {
            id: 'album_' + new Date().getTime(),
            name: name,
        };

        this.albums.unshift(newAlbum);

        this.updateStorageAlbums();
    }

    // Obtiene albums almacenados en caché del almacenamiento local y las carga en memoria.
    public async getAlbums() {
        //Obtener fotos de la caché
        const listAlbums = await Preferences.get({ key: this.keyUserAlbums });
        this.albums = listAlbums.value ? JSON.parse(listAlbums.value!) : [];
    }

    // Obtiene la información de un album se busca por ID
    public async getAlbumById(albumId: string) {
        await this.getAlbums();
        const album = this.albums?.find(album => album.id === albumId);
        return album ? album : null;
    }

    // Obtiene la información de un album se busca por Image
    public async getAlbumByImage(imageId: string) {
        await this.getAlbums();
        const album = this.albums?.find(album => album.image === imageId);
        return album ? album : null;
    }

    // Actualizar información de album
    public async updateAlbum(infoAlbum: IAlbum) {
        let albumToUpdate = this.albums?.find(album => album.id === infoAlbum.id);
        if (albumToUpdate) Object.assign(albumToUpdate, infoAlbum);

        this.updateStorageAlbums();
    }

    public updateStorageAlbums() {
        // Actualiza el almacenamiento local con el nuevo conjunto de fotos.
        Preferences.set({
            key: this.keyUserAlbums,
            value: JSON.stringify(this.albums),
        })
    }
}
