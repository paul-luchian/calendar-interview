import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BootstrapService } from './shared/services/core/bootstrap.service';
import { provideHttpClient } from '@angular/common/http';

export function appInitializerFactory(bootstrapService: BootstrapService) {
  return () => bootstrapService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [BootstrapService],
      multi: true,
    },
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
};
