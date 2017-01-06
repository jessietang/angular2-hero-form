import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeroFormComponent} from './hero-form.component';
import {GrammarTestComponent} from './grammar-test.component';

import {UnlessDirective} from './unless.directive';
import {HighLightDirective} from './highlight.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroFormComponent, GrammarTestComponent, UnlessDirective,HighLightDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
