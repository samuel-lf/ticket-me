import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { MeusDados } from '../meus-dados/meus-dados.component';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.html'
})
export class Configuracoes {

    constructor(public navCtrl: NavController,
                public db : AngularFirestore,
                public afAuth:AngularFireAuth) {

            
}
 public meusDados() : void{
      this.navCtrl.push(MeusDados);
}

  public logout():void{
    this.afAuth.auth.signOut();
  }
}