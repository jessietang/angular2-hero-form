/**
 * Created by jessietang on 1/6/2017.
 */
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighLightDirective {
  constructor(renderer: Renderer, elementRef: ElementRef){
    renderer.setElementStyle(elementRef.nativeElement, 'background-color','gold');
    console.log(`* AppRoot highlight called for ${elementRef.nativeElement.tagName}`);
  }

}
