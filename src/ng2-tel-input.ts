import { Directive, ElementRef, EventEmitter,
    HostListener, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';

@Directive({
    selector: '[ng2TelInput]',
})
export class Ng2TelInput implements OnInit {
    @Input('ng2TelInputOptions') ng2TelInputOptions: any;
    @Output('hasError') hasError: EventEmitter<boolean> = new EventEmitter();
    @Output('ng2TelOutput') ng2TelOutput: EventEmitter<any> = new EventEmitter();
    @Output('countryChange') countryChange: EventEmitter<any> = new EventEmitter();
    ngTelInput: any;
    constructor (private el: ElementRef) {}
    ngOnInit() {
        this.ngTelInput = $(this.el.nativeElement);
        this.ngTelInput.intlTelInput(this.ng2TelInputOptions);
        this.ngTelInput.on("countrychange", (e: any, countryData:any) => {
            this.countryChange.emit(countryData);
          });
    }

    @HostListener('keyup') onKeyup() {
        let isInputValid:boolean = this.isInputValid();
        if (isInputValid) {
            let telOutput = this.ngTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        } else
        {
            this.hasError.emit(isInputValid);
        }
    }

    isInputValid(): boolean {
        return this.ngTelInput.intlTelInput('isValidNumber') ? true : false;
    }
}
