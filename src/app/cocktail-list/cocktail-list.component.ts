import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public  cocktails: Cocktail[] = [];
    public  service: CocktailService;

    constructor( param_service: CocktailService ){
        this.service  =  param_service;
    }

    public  ngOnInit(): void{
        this.service.getCocktails().subscribe(
            (param_cocktails: Cocktail[]) => {
                this.cocktails  =  param_cocktails;
            }
        );
    }
}

