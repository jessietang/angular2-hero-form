/**
 * Created by jessietang on 1/4/2017.
 */
import {Component} from '@angular/core';

import {UnlessDirective} from './unless.directive';


@Component({
  moduleId: module.id,
  selector: 'grammar-test',
  templateUrl: 'views/grammar-test.component.html'
})

export class GrammarTestComponent{
  title = 'angular2 插值表达式';
  imgUrl = 'https://angular.cn/resources/images/logos/standard/logo-nav.png';
  isUnchanged = true;
  unChanged = false;
  actionName = 'clickMe';
  badCurly = 'badCurly';
  isSpecial = true;
  canSave = true;

  condition = false;

  currentHero = {
    name: 'jessie'
  };

  users = [
    {
      userName:"aaa",
      age: 20
    },
    {
      userName: "bbb",
      age: 30
    }
  ];



  /*绑定到一个 key:value 形式的控制对象，是应用NgClass的好方式。
   这个对象中的每个 key 都是一个 CSS 类名，如果它的 value 是true，
   这个类就会被加上，否则就会被移除。*/
  setClasses() {
    let classes =  {
      saveable: this.canSave,      // true
      modified: !this.isUnchanged, // false
      special: this.isSpecial,     // true
    };
    return classes;
  }

  onSave(){
    alert('have saved it');
  }

  setStyles(){
    let styles = {
      // CSS property names
      'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
      'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
    };
    return styles;
  }

  callPhone(phoneNum: number){
    alert(phoneNum);
  }

  callPerson(phoneName: string){
    alert(phoneName);
  }


  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
