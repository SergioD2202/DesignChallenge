import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  products:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  constructor() { }

  ngOnInit(): void {
  }

}
