import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnsubmitted]'
})
export class UnsubmittedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
