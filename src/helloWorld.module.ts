import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorld }   from './HelloWorld';
import { Ng2TelInput } from './ng2-intl-tel-input';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [
        HelloWorld,
        Ng2TelInput
        ],
    providers: [],
    bootstrap: [HelloWorld]
})
export class HelloWorldModule { }
