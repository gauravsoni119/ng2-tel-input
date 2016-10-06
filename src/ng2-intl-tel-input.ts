import { Directive, ElementRef, OnInit } from '@angular/core';
import 'intl-tel-input';
import 'jquery';
declare var $;


@Directive({
    selector: '[ng2TelInput]'
})
export class Ng2TelInput implements OnInit {
    constructor (private el: ElementRef) {}
    ngOnInit() {
        $(this.el.nativeElement).intlTelInput();
    }
}
