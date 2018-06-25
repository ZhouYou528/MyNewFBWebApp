import { Component, OnInit } from '@angular/core';
import { fallIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:  [fallIn()]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
