import { HeroService } from './../hero.service';

import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  

  constructor(private heroService: HeroService) {



  }


  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  saveHero(heroName : string) : void{
    var name = heroName.trim();
    if(!name) {return;}
    this.heroService.createHero({name} as Hero)
    .subscribe(()=>{});
  }
}
