import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROS } from 'src/app/mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  heros: Hero[] = HEROS

  constructor() { }

  ngOnInit(): void {
  }

}
