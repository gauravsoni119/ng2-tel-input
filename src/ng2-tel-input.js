"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
require("intl-tel-input");
require("intl-tel-input/build/js/utils");
var Ng2TelInput = /** @class */ (function () {
    function Ng2TelInput(el) {
        this.el = el;
        this.hasError = new core_1.EventEmitter();
        this.ng2TelOutput = new core_1.EventEmitter();
        this.countryChange = new core_1.EventEmitter();
    }
    Ng2TelInput.prototype.ngOnInit = function () {
        var _this = this;
        this.ngTelInput = $(this.el.nativeElement);
        this.ngTelInput.intlTelInput(this.ng2TelInputOptions);
        this.ngTelInput.on("countrychange", function (e, countryData) {
            _this.countryChange.emit(countryData);
        });
    };
    Ng2TelInput.prototype.onBlur = function () {
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            var telOutput = this.ngTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
    Ng2TelInput.prototype.isInputValid = function () {
        return this.ngTelInput.intlTelInput('isValidNumber') ? true : false;
    };
    Ng2TelInput.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2TelInput]',
                },] },
    ];
    /** @nocollapse */
    Ng2TelInput.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    Ng2TelInput.propDecorators = {
        'ng2TelInputOptions': [{ type: core_1.Input, args: ['ng2TelInputOptions',] },],
        'hasError': [{ type: core_1.Output, args: ['hasError',] },],
        'ng2TelOutput': [{ type: core_1.Output, args: ['ng2TelOutput',] },],
        'countryChange': [{ type: core_1.Output, args: ['countryChange',] },],
        'onBlur': [{ type: core_1.HostListener, args: ['blur',] },],
    };
    return Ng2TelInput;
}());
exports.Ng2TelInput = Ng2TelInput;
//# sourceMappingURL=ng2-tel-input.js.map