import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
})
export class DestaqueDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.background = '#d39696';
    this.elRef.nativeElement.style.padding = '5px';
    this.elRef.nativeElement.style.fontWeight = 'bold';
    this.elRef.nativeElement.style.color = '#000'
  }
}
