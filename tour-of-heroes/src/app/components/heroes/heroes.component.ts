import { Component, OnInit } from '@angular/core';
import { HeroCompanyService } from '../../services/heroCompany/hero-company.service';
import { Hero } from 'src/app/interface/hero';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroCompany: HeroCompanyService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent says: Hero ${hero.name} selected!`);
  }

  getHeroes(): void {
    this.heroCompany.index().subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
