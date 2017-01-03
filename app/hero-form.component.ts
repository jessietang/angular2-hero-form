/**
 * Created by jessietang on 1/3/2017.
 */
import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'views/hero-form.component.html'
})

export class HeroFormComponent{
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  heroModel = new Hero(12, 'jessie tang',this.powers[0],'Chuck Overstreet');
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.heroModel);
  }

  newHero(){
    this.heroModel = new Hero(13,'','');
  }
}
