"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_tel_input_1 = require("./ng2-tel-input");
var Ng2TelInputModule = /** @class */ (function () {
    function Ng2TelInputModule() {
    }
    Ng2TelInputModule.forRoot = function () {
        return {
            ngModule: Ng2TelInputModule,
            providers: []
        };
    };
    Ng2TelInputModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [ng2_tel_input_1.Ng2TelInput],
                    exports: [ng2_tel_input_1.Ng2TelInput]
                },] },
    ];
    /** @nocollapse */
    Ng2TelInputModule.ctorParameters = function () { return []; };
    return Ng2TelInputModule;
}());
exports.Ng2TelInputModule = Ng2TelInputModule;
//# sourceMappingURL=ng2-tel-input.module.js.map