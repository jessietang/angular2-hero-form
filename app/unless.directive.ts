
/**
 * Created by jessietang on 1/6/2017.
 */
// 自定义指令
import {Directive, Input} from '@angular/core';

import {TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myUnless]'
})
export class UnlessDirective {

  // 我们通过TemplateRef来访问模板。渲染器是ViewContainerRef。 \
  // 我们把它们都作为私有变量注入到构造函数中。
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  @Input() set myUnless(condition: boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }
}
