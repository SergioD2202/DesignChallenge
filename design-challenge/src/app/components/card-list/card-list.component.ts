import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  products:any[] = [true,false,true,false,true,false,false,false,true,true,false,false,true,true,true];

  //Select words

  gameSelect:string = 'Select a game';
  priceSelect:string = 'All';
  itemTypeSelect:string = 'All';
  sortedBySelect:string = 'Featured';


  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(event:any) {

    switch(event.target.id) {
      case 'games':
        this.gameSelect = event.target.value;
        break;

      case 'prices':
        this.priceSelect = event.target.value;
        break;

      case 'item-types':
        this.itemTypeSelect = event.target.value;
        break;

      case 'sorted-by':
        this.sortedBySelect = event.target.value;
        break;
    }
  }

}
