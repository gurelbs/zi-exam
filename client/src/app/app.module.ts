import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent } from './pages';
import { HeaderComponent, LoginFormComponent, MagiciansFilterComponent, MagiciansTableComponent } from './components';
import { MagiciansComponent } from './pages/magicians/magicians.component';
import { LoginInterceptor } from './services/login.interceptor';
import { MovePropertiesComponent } from './components/move-properties/move-properties.component';
import { PropertiesComponent } from './pages/properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    HeaderComponent,
    MagiciansComponent,
    MagiciansFilterComponent,
    MagiciansTableComponent,
    MovePropertiesComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
