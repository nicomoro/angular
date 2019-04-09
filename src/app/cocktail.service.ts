
import { Injectable } from '@angular/core';
import { Cocktail } from '../app/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn:  'root' })

export  class  CocktailService {

    public service: HttpClient;
    constructor(public param_service: HttpClient) {
        this.service = param_service;
    }

    public  getCocktails(): Observable<Cocktail[]> {
        const  obs1: Observable<any> = this.service.get('assets/data.json');
        const  treatment  = ( param_data: any) => {
            return  param_data as  Cocktail[];
        };

        return  obs1.pipe( map( treatment) );
    }
}
