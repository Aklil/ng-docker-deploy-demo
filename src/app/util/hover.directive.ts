import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    // rendered is platform agnostic
  }

  //host event handlers //output events from the host
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }
}
