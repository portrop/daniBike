import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './imports/app/app.module';

console.log(22222);
const platform = platformBrowserDynamic();
platform.bootstrapModule<AppModule>(AppModule);
