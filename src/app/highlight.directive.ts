import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') myBackgroundColor : string;
  @HostBinding('style.width.px') myFontSize : string;
  constructor() { }
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "yellow");
  }
  @HostListener('mouseenter') mouseEnterEvent (eventData : Event){
    this.myBackgroundColor = 'blue';
    this.myFontSize = "90";
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData : Event){
    this.myBackgroundColor = 'transparent';
    this.myFontSize = "100";
  }
}
