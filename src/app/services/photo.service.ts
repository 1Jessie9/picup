import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { IPhoto } from '../interfaces/photo.interface';
import { AlbumsService } from './albums.service';
import { IAlbum } from '../interfaces/album.interface';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    //Array de fotos
    public photos: IPhoto[] = [];
    // Clave para almacenar y recuperar fotos del almacenamiento local.
    private readonly keyUserPhotos: string = "photos_user";

    constructor(
        public albumsService: AlbumsService,
    ) { }

    // Toma una nueva foto usando la cámara del dispositivo, 
    // la guarda localmente y actualiza el almacenamiento local.
    public async addNewPhoto() {
        // Toma una foto con la cámara.
        const imageTaked = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
        });

        // Guarda la foto en el sistema de archivos local.
        const imageSaved = await this.savePicture(imageTaked);
        // Añade la foto al inicio del array de fotos.
        this.photos.unshift(imageSaved);

        this.updateStorage();
    }

    // Guarda una foto en el sistema de archivos local y devuelve la referencia.
    private async savePicture(cameraPhoto: Photo): Promise<{ filepath: string; webPath: string | undefined; }> {
        // Convierte la foto a base64
        const base64 = await this.readAsBase64(cameraPhoto);

        // Genera un nombre de archivo único para la foto.
        const fileName = new Date().getTime() + '.jpeg';

        // Guarda el archivo en el sistema de archivos.
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data,
        });

        return {
            filepath: fileName,
            webPath: cameraPhoto.webPath,
        };
    }

    // Lee un archivo de foto y lo convierte a una cadena base64.
    public async readAsBase64(cameraPhoto: Photo) {
        const response = await fetch(cameraPhoto.webPath!);
        const blob = await response.blob();

        return await this.convertBlobToBase64(blob) as string;
    }

    // Convierte un Blob a una cadena base64.
    private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        }
        reader.readAsDataURL(blob);
    });

    public async getPhotosByAlbum(albumId: string) {
        await this.getPhotosCache();
        if (!this.photos) return [];
        return this.photos?.filter(photo => photo.idAlbum === albumId);
    }

    // Obtiene las fotos almacenadas en caché del almacenamiento local y las carga en memoria.
    public async getPhotosCache() {
        //Obtener fotos de la caché
        const listPhotos = await Preferences.get({ key: this.keyUserPhotos });
        this.photos = listPhotos.value ? JSON.parse(listPhotos.value!) : [];

        this.photos.forEach(async photo => {
            //Leer cada foto en el sistema de archivos
            const readFile = await Filesystem.readFile({
                path: photo.filepath,
                directory: Directory.Data,
            });

            //Cargar fotos en base64 para WEB
            photo.webPath = `data:image/jpeg;base64,${readFile.data}`;

        });
    }

    // Elimina una foto específica del sistema de archivos y actualiza el almacenamiento local.
    public async deletePhoto(filepath: string): Promise<void> {
        // Encuentra el índice de la foto en el arreglo `photos` basándose en el `filepath`.
        const index = this.photos.findIndex(p => p.filepath === filepath);

        // Verifica si se encontró la foto.
        if (index !== -1) {
            try {
                // Elimina el archivo de foto del sistema de archivos.
                await Filesystem.deleteFile({
                    path: filepath,
                    directory: Directory.Data,
                });

                // Elimina la foto del arreglo `photos`
                this.photos.splice(index, 1);

                this.updateStorage();
            } catch (error) {
                console.error('Error al eliminar la foto:', error);
            }
        } else {
            console.error('Foto no encontrada para el filepath proporcionado.');
        }
    }

    // Guardar fotos en album
    public async addPhotosToAlbum(photos: IPhoto[], albumId: string) {
        //Buscar fotos y actualizar el album
        this.photos.forEach(photo => {
            if (photos.includes(photo)) photo.idAlbum = albumId;
            delete photo["selected"];
        });
        this.updateInfoAlbum(albumId, photos[0].webPath ?? "");
        this.updateStorage();
    }

    // Actualizar foto del album
    public async updateInfoAlbum(albumId: string, image: string) {
        const infoAlbum: IAlbum | null = await this.albumsService.getAlbumById(albumId);
        if (infoAlbum) {
            // Primero borrar si existe en un album la imagen
            if (infoAlbum.image) {
                // Actualizar album que tenga foto como portada
                const infoAlbumImage: IAlbum | null = await this.albumsService.getAlbumByImage(infoAlbum.image);
                if (infoAlbumImage) {
                    this.albumsService.updateAlbum({
                        id: infoAlbumImage.id,
                        name: infoAlbumImage.name,
                        image: "",
                    })
                }
            }

            // Luego actualizar el album actual
            this.albumsService.updateAlbum({
                id: infoAlbum.id,
                name: infoAlbum.name,
                image: image,
            })
        }
    }

    // Borrar foto del album correspondiente
    public async deletePhotoAlbum(photoAlbum: string) {
        const photoDeleted = this.photos?.find(photo => photo.filepath === photoAlbum);
        if (photoDeleted) delete photoDeleted["idAlbum"];

        this.updateStorage();
    }

    private updateStorage() {
        // Actualiza el almacenamiento local con el nuevo conjunto de fotos.
        Preferences.set({
            key: this.keyUserPhotos,
            value: JSON.stringify(this.photos),
        })
    }
}
