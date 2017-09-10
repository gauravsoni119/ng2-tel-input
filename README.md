
# Angular 2 wrapper for intl-tel-input

# Installation

Run following command to install ng2-tel-input
npm install ng2-tel-input

After installing, you need to add "intlTelInput.css" in your index.html.
Once done, we are ready to use this library.

# How to use

In order to use this directive, you need to add "ng2TelInput" directive with "[ng2TelInputOptions]" options to your text field. For example,
<input type="text"
        ng2TelInput
        [ng2TelInputOptions]="{initialCountry: 'in'}"
        (hasError)="hasError($event)"
        (ng2TelOutput)="getNumber($event)"
        (countryChange)="onCountryChange($event)" />

![N|Solid](https://github.com/gauravsoni119/ng2-tel-input/blob/master/example.png)
