import { NgModule, ModuleWithProviders } from '@angular/core';

import { Ng2TelInput } from './ng2-tel-input';

@NgModule({
    declarations: [Ng2TelInput],
    exports: [Ng2TelInput]
})
export class Ng2TelInputModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2TelInputModule,
            providers: []
        }
    }
}
