import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  heroes: Hero[] = [];
  heroesObservable$: Observable<Hero[]>;
  ngOnInit() {

  }

  search(name: string): void {


    this.heroesObservable$ = this.heroService.searchHero(name);
  }

}
