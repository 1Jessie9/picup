import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'photos',
                loadChildren: () => import('../photos/photos.module').then(m => m.PhotosPagePageModule)
            },
            {
                path: 'albums',
                loadChildren: () => import('../albums/albums.module').then(m => m.AlbumsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/photos',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/photos',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
