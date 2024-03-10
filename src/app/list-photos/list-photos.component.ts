import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPhoto } from '../interfaces/photo.interface';
import { PhotoService } from '../services/photo.service';

@Component({
    selector: 'app-list-photos',
    templateUrl: './list-photos.component.html',
    styleUrls: ['./list-photos.component.scss'],
})
export class ListPhotosComponent implements OnChanges {
    @Input() photosInput: IPhoto[] = [];
    @Input() selection: boolean = false;
    @Output() selectedPhotos: EventEmitter<IPhoto[]> = new EventEmitter();
    @Output() clickDeleted: EventEmitter<IPhoto> = new EventEmitter();
    public photos: IPhoto[] = [];

    constructor(
        public photoService: PhotoService,
    ) {
    }

    async ngOnChanges() {
        this.photos = this.photosInput;
    }

    async deletedPhoto(photo: IPhoto) {
        this.clickDeleted.emit(photo);
    }

    async selectCursor(photo: IPhoto) {
        if (!this.selection) return;

        photo.selected = !photo.selected;
        const photosSelected = this.photos?.filter(photo => photo.selected === true);
        this.selectedPhotos.emit(photosSelected);
    }
}
