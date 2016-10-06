import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HelloWorldModule } from './helloWorld.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HelloWorldModule);