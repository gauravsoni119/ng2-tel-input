import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';

@Directive({
    selector: '[ng2TelInput]',
})
export class Ng2TelInput implements OnInit {
    @Input('ng2TelInput') ng2TelInput: any;
    ngTelInput: any;
    constructor (private el: ElementRef) {}
    ngOnInit() {
        this.ngTelInput = $(this.el.nativeElement);
        console.log(this.ng2TelInput);
        this.ngTelInput.intlTelInput(this.ng2TelInput);
    }

    @HostListener('blur') onBlur() {
        if (this.ngTelInput.intlTelInput('isValidNumber')) {
            console.log('valid number');
        } else {
            console.log('invalid number');
        }
    }
}
