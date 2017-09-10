import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import 'intl-tel-input';
import 'jquery';
declare var $: any;

@Directive({
    selector: '[ng2TelInput]'
})
export class Ng2TelInput implements OnInit {
    @Input('ng2TelInput') ng2TelInput: any;
    constructor (private el: ElementRef) {}
    ngOnInit() {
        console.log(this.ng2TelInput);
        $(this.el.nativeElement).intlTelInput(this.ng2TelInput);
    }
}
