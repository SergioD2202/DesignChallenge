import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() productName:string = "placeholder";
  @Input() productIcon:string = "../../../assets/placeholder.png";
  @Input() gameIcon:string = "../../../assets/osrs-small.svg";
  amount:number = 1;
  showArrows:boolean = false;
  @Input() isOnSale:boolean = true;
  @Input() price:number = 522.5;
  @Input() salePrice:number = 450;
  @Input() description:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias nobis nihil dolore vitae sunt a culpa assumenda possimus obcaecati, necessitatibus veritatis, labore ea accusantium quis mollitia deleniti odit eos.";
  shortDesc:string = "";
  /**
   * cosas que tienen las cartas de los productos:
   *
   * -icono del juego que pertenece (string de la imagen)
   * -icono del producto (string de la imagen)
   * -nombre del producto (string)
   * -contador de la cantidad (mínimo 1, number)
   * -booleano de si está ON SALE
   * -precio del producto (number)
   * -precio con el descuento (opcional, number)
   * -descripción del producto (string, si supera x cantidad de length colocar ...)
   * -booleano de si hay stock
   */

  constructor() { }


  ngOnInit(): void {
  }

  //remove the notations of decimals and negative
  avoidDecimals(event:any) {

    if(event.key==='.' || event.key === '-')
    {
      event.preventDefault();
    }
  }

  //up the amount
  upAmount(){
    this.amount++;
  }

  //lower the amount
  lowerAmount(){
    if(this.amount > 1) this.amount--;
  }

  //hover and unhover handler
  hoverUnhover() {
    this.showArrows = !this.showArrows;
  }

  //shorten the description
  shortenDesc() {
    if(this.description.length > 53) {
      this.shortDesc = this.description.substring(0, 50) + '...';
    }

    return this.shortDesc;
  }
}
