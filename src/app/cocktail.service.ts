import { Injectable } from '@angular/core';
import { Cocktail } from '../app/cocktail.model';

@Injectable({
    providedIn:  'root'
})

export  class  CocktailService {
    public cocktails = [ new Cocktail('BOBORAKA', 24, 'ht' ), new Cocktail('Gin soleil', 18, 'ht' )];
    constructor() { }

    public  getCocktails() {
        return this.cocktails;
    }

}