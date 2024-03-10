import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    { 
        path: 'album/:albumId', 
        loadChildren: () => import('./album/album.module').then(m => m.AlbumPageModule) 
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/tabs/albums',
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
