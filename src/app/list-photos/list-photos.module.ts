import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPhotosComponent } from './list-photos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListPhotosComponent],
  exports: [ListPhotosComponent]
})
export class ListPhotosComponentModule {}
