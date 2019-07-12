import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, 
          NbLayoutModule, 
          NbSidebarModule, 
          NbButtonModule, 
          NbCardModule, 
          NbInputModule,
          NbSelectModule,
          NbDatepickerModule,
          NbAlertModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DatepickerShowcaseComponent } from './homepage/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DatepickerShowcaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NbAlertModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
