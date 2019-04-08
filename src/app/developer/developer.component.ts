import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  public developer = new Developer('MOREAU', 'Nicolas', 36, 'male', 'Bonjour', [
    new Skill('Angular', 'Logo', 'www.angular.io'),
    new Skill('JS', 'Logo', 'www.JS.fr')
  ]);


  ngOnInit() {
  }

}
