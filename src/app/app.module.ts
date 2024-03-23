import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PlanetaryService } from './services/http/planetary.service';
import { ApiHandleService } from './services/http/api-handle.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './root-store/app/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './root-store/app/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationService } from './services/http/application.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer, }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),

  ],
  providers: [
    provideClientHydration(),
    PlanetaryService,
    ApiHandleService,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
