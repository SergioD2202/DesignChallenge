import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  //products: an array of booleans to trigger one of two templates in the card component
  products:any[] = [true,false,true,false,true,false,false,false,true,true,false,false,true,true,true, true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,false,true,false,true,false,false,false,true,true,false,false,true,true,true, true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false];
  pageProducts:any[] = [];
  currentPage:number = 1;
  pageCount: number = Math.ceil(this.products.length/15);
  isLoaded:boolean = true;

  //Select words

  gameSelect:string = 'Select a game';
  priceSelect:string = 'All';
  itemTypeSelect:string = 'All';
  sortedBySelect:string = 'Featured';


  constructor() { }

  ngOnInit(): void {
    for(let i = 0;i<15;i++) {
      this.pageProducts.push(this.products[i]);
    }
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

  changePage(page:number) {
    this.currentPage = page;

    this.pageProducts = [];

    for(let i = 0 + ((this.currentPage-1)*15);i<0 + ((this.currentPage-1)*15)+15;i++) {
      this.pageProducts.push(this.products[i]);
    }
  }

  changePageEvent(event:any) {
    if(event.target.value > 0 && event.target.value <= this.pageCount) {
      this.currentPage = event.target.value;

      this.pageProducts = [];

      for(let i = 0 + ((this.currentPage-1)*15);i<0 + ((this.currentPage-1)*15)+15;i++) {
        this.pageProducts.push(this.products[i]);
      }

      const currentPageElement:any =document.querySelector('.page-'+this.currentPage);

      currentPageElement?.click();
    }
  }

  nextPage() {
    this.currentPage += 1;

    this.pageProducts = [];

    for(let i = 0 + ((this.currentPage-1)*15);i<0 + ((this.currentPage-1)*15)+15;i++) {
      this.pageProducts.push(this.products[i]);
    }
  }

  previousPage() {
    this.currentPage -= 1;

    this.pageProducts = [];

    for(let i = 0 + ((this.currentPage-1)*15);i<0 + ((this.currentPage-1)*15)+15;i++) {
      this.pageProducts.push(this.products[i]);
    }
  }

}
