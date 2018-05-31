import { CriarPromo } from './../criar-promo/criar-promo';
import { Component } from '@angular/core';
import { Configuracoes } from '../configuracoes/configuracoes.component';
import { InicioEmpresaComponent } from '../inicio-empresa/inicio-empresa.component';
import { ResgateEmpresaPage } from '../resgate-empresa/resgate-empresa';
import { AngularFireAuth } from 'angularfire2/auth';




@Component({
  templateUrl: 'tabs-empresa.html'
})
export class TabsEmpresaPage {

  tab1Root = InicioEmpresaComponent;
  // tab2Root = CriarPromo;
  tab3Root = ResgateEmpresaPage;
  tab4Root = Configuracoes;


  constructor(public afAuth:AngularFireAuth) {

  }
  public logout():void{
    this.afAuth.auth.signOut();
  }
}
