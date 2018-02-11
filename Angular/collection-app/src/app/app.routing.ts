import {Routes,RouterModule} from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';

const APP_ROUTES:Routes =[
    {
        path:'collection',
        component:CollectionComponent
    },
    {
        path:'market',
        component:MarketComponent
    },
    {
        path:'',
        redirectTo:'/collection',
        pathMatch:'full'
    }

];

export const routing=RouterModule.forRoot(APP_ROUTES);
