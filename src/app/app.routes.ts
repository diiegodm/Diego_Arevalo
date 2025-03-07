import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:"",
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: "",
        loadChildren: () => import('./home/home.routes').then(m => m.HOME_routes) 
    }

];
