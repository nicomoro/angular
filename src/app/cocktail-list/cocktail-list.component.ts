import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public cocktail: Cocktail;
  public cocktails = this.service.getCocktails();

  constructor(public service: CocktailService) { }
  // getCocktails(){
  //   // this.cocktails = this.service.getCocktails()
  // }

  ngOnInit() {
  }


}
