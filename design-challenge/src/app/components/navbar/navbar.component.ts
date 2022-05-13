import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  hamburgerActive:boolean = false;

  ngOnInit(): void {
  }

  activeHamburger() {
    this.hamburgerActive = !this.hamburgerActive;
  }

}
