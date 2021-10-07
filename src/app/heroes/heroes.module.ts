import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroComponent } from './pages/hero/hero.component';



@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HomeComponent,
    ListHeroesComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
