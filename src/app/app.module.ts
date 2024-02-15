import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
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
  ],
  providers: [
    provideClientHydration(),
    PlanetaryService,
    ApiHandleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
