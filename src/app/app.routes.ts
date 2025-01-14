import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full' },
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent },
    {path:'explore',component:ExploreComponent},
    {path:'details/:id',component:DetailsComponent}
   

];
