import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {

    // for dynamic color
    @Input() appHighlight = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight);  // for dynamic directive
        // this.highlight('yellow')    // for static color
    } 

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    } 

   constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.appHighlight;
    // el.nativeElement.style.backgroundColor = 'yellow';   // for static color
   }

   highlight = (color: string) => {
    this.el.nativeElement.style.backgroundColor = color;
   }
}
