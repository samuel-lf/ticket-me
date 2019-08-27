import { ResgateUsuarioPage } from './../pages/resgate-usuario/resgate-usuario';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Services
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Componentes
import { LoginComponent } from '../pages/login/login.component';
import { RegistroUsuarioComponent } from '../pages/registro-usuario/registro-usuario.component';
import { RegistroEmpresaComponent } from '../pages/registro-empresa/registro-empresa.component';
import { InicioUsuario } from '../pages/inicio-usuario/inicio-usuario';
import { TabsPage } from '../pages/tabs/tabs.component';
import { TabsEmpresaPage } from '../pages/tabs-empresa/tabs-empresa';

import { Configuracoes } from '../pages/configuracoes/configuracoes.component';
import { MeusDados } from '../pages/meus-dados/meus-dados.component';
import { InicioEmpresaComponent } from '../pages/inicio-empresa/inicio-empresa.component';


import { CriarPromo } from '../pages/criar-promo/criar-promo';
import { LerQrCode } from '../pages/ler-qrcode/ler-qrcode';

// QRcode
import { NgxQRCodeModule } from "ngx-qrcode2";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { QrcodePage } from '../pages/qrcode/qrcode';
import { ResgateEmpresaPage } from '../pages/resgate-empresa/resgate-empresa';



@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    RegistroUsuarioComponent,
    RegistroEmpresaComponent,
    InicioUsuario,
    InicioEmpresaComponent,
    TabsPage,
    TabsEmpresaPage,
    Configuracoes,
    MeusDados,
    CriarPromo,
    LerQrCode,
    QrcodePage,
    ResgateEmpresaPage,
    ResgateUsuarioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    RegistroUsuarioComponent,
    RegistroEmpresaComponent,
    InicioUsuario,
    InicioEmpresaComponent,
    TabsPage,
    TabsEmpresaPage,
    Configuracoes,
    MeusDados,
    CriarPromo,
    LerQrCode,
    QrcodePage,
    ResgateEmpresaPage,
    ResgateUsuarioPage

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
