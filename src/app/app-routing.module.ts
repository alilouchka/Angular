
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports : [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})



export class AppRoutingModule {
 }
