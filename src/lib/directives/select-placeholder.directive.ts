import { Directive, ElementRef, Inject, InjectionToken } from '@angular/core';
export const LABEL_TOKEN = new InjectionToken<string>('LABEL_TOKEN');

@Directive({
  selector: '[selectPlaceholder]'
})
export class SelectPlaceholderDirective {

  constructor(@Inject(LABEL_TOKEN) private label: string, private elementRef: ElementRef) {
        elementRef.nativeElement.innerText = label + "...";
  }

}
