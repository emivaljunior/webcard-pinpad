import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HttpClientModule } from '@angular/common/http';
//Componentes
import { MyApp } from './app.component';

//Paginas
import { VendaPage } from '../pages/venda/venda';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//Providers
import { RestProvider } from '../providers/rest/rest';
import { Base64Provider } from '../providers/base64/base64';

@NgModule({
  declarations: [
    MyApp,
    VendaPage,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VendaPage,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Base64Provider
  ]
})
export class AppModule {}
