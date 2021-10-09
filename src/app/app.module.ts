import { BASE_PATH } from './flowable-client/variables';
import { environment } from './../environments/environment';
import { Configuration, ConfigurationParameters } from './flowable-client/configuration';
import { ApiModule } from './flowable-client/api.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    basePath: environment.BASE_PATH, // = '/api',
    username: 'admin',
    password: 'test'
  }
  return new Configuration(params);
}

