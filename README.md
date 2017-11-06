
# Angular 2 wrapper for intl-tel-input

# Installation

Run following command to install ng2-tel-input
npm install ng2-tel-input

After installing, you need to add "intlTelInput.css" in your index.html.__

In case of angular-cli, add path to css in your styles property in angular-cli.json. For example,__
"styles": [
        "styles.css",
        "../node_modules/intl-tel-input/build/css/intlTelInput.css"]
__
Once done, we are ready to use this library.

# How to use with angular-cli

In order to use this directive, you need to add "ng2TelInput" directive with "[ng2TelInputOptions]" options to your text field. For example,__
<input type="text"__
        ng2TelInput__
        [ng2TelInputOptions]="{initialCountry: 'in'}"__
        (hasError)="hasError($event)"__
        (ng2TelOutput)="getNumber($event)"__
        (countryChange)="onCountryChange($event)" />

![N|Solid](https://github.com/gauravsoni119/ng2-tel-input/blob/master/example.png)
