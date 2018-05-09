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

  saveHero(heroName: string): void {
    const name = heroName.trim();
    if (!name) { return; }
    this.heroService.createHero({ name: name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }


  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero)
      .subscribe();
  }
}
