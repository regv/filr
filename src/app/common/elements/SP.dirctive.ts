import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSpecialIsAlphaNumeric]'
})
export class SpecialCharacterDirective {

  regexStr = '^[a-fA-F0-9_]*$';
  @Input() isAlphaNumeric: boolean;


  constructor(private el: ElementRef) {
  }


  @HostListener('keypress', ['$event']) onKeyPress(e) {
    // return new RegExp(this.regexStr).test(event.key);
    if (!this.validateKeyCode(e.keyCode, e.target.value)) {
        e.preventDefault();

    }
  }
  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    // alert('c');
    this.validateFields(event);
  }

    validateFields(event) {
    setTimeout(() => {
      alert(this.el.nativeElement.value);
      this.el.nativeElement.value = this.el.nativeElement.value.replace('.', '').replace(/\s/g, '');
      event.preventDefault();

    }, 1);
  }

  // event.replace('.', '').replace(',','.'))

  validateKeyCode(keyCode: number, value: any) {
    const inp = String.fromCharCode(keyCode);
    if ((/[a-fA-F0-9\#\_]/.test(inp)) && (value.length <= 6) && (this.good(value))) {
      // this.el.nativeElement.value[0].replace('#');
      return true;
    }
  }
addSeparator(element) {
    const val = element.value;
    const separator = '#';
    return separator + val;
  }
  good(element) {
    if ( element.charAt(0) !== '#') {
      // value.charAt(0).replace('#');
     // this.addSeparator( element.charAt(0));
     return this.addSeparator( element.charAt(0));
    }
  }
}
