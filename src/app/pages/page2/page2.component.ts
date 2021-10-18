import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROS } from 'src/app/mock-heros';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  heros: Hero[] = HEROS;
  constructor() { }

  ngOnInit(): void {
  }

}
