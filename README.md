
# Angular 2 wrapper for intl-tel-input

# Installation

Run following command to install ng2-tel-input

```sh
npm install ng2-tel-input --save
```

After installing, you need to add "intlTelInput.css" in your index.html.

In case of angular-cli, add path to css in your styles property in angular-cli.json. For example,

```
"styles": [
  "styles.css",
  "../node_modules/intl-tel-input/build/css/intlTelInput.css"
]
```

Now add Ng2TelInputModule into your AppModule. For example,

```js
import {Ng2TelInputModule} from 'ng2-intl-tel-input';
```

Once done, we are ready to use this library.

# How to use with angular-cli

In order to use this directive, you need to add "ng2TelInput" directive with "[ng2TelInputOptions]" options to your text field. For example,

```html
<input type="text"
  ng2TelInput
  [ng2TelInputOptions]="{initialCountry: 'in'}"
  (hasError)="hasError($event)"
  (ng2TelOutput)="getNumber($event)"
  (countryChange)="onCountryChange($event)" />
```

![N|Solid](https://github.com/gauravsoni119/ng2-tel-input/blob/master/example.png)
