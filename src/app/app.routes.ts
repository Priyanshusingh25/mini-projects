import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DogverseComponent } from './pages/dogverse/dogverse.component';
import { CatverseComponent } from './pages/catverse/catverse.component';
import { othersComponent } from './pages/others/others.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dogverse',
        component: DogverseComponent
    },
    {
        path: 'catverse',
        component: CatverseComponent
    },
    {
        path: 'others',
        component: othersComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];
