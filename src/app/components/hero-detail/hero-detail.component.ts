import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../services/hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	@Input() hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
		) { }

	ngOnInit() {
		this.getHero();
	}

	goBack(): void {
		this.location.back();
	}

	getHero(): void {
		let id = Number(this.route.snapshot.paramMap.get('id'));

		this.heroService.getHero(id).subscribe(hero => this.hero = hero);
	}

}
