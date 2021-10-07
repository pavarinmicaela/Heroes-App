import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'list', component: ListHeroesComponent},
      {path: 'add', component: AddHeroComponent},
      {path: 'edit/:id', component: AddHeroComponent},
      {path: 'search', component: SearchHeroComponent},
      {path: ':id', component: HeroComponent},
      {path: '**', redirectTo: 'list'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
