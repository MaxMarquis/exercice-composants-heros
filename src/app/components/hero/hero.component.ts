import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero = { id: 0, name: "", description: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
