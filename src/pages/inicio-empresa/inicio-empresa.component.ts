import { CriarPromo } from './../criar-promo/criar-promo';
import { Component } from '@angular/core';
import { NavController, Alert, AlertController, Card } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../../models/usuario';
import { CardPromo } from '../../models/cardPromo';
import { QrcodePage } from '../qrcode/qrcode';


@Component({
  templateUrl: './inicio-empresa.html',
})
export class InicioEmpresaComponent {

  public listaCard: Observable<CardPromo[]>;
  public empresa = {}

  constructor(public navCtrl: NavController,
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {

    let uid = afAuth.auth.currentUser.uid;

    db.collection('usuarios').doc(uid).valueChanges().subscribe((empresa) => { this.empresa = empresa; });

    this.listaCard = db.collection<CardPromo>('promocoes', ref => ref.where('empresa', '==', uid)).valueChanges();
  }

  public gerarQRCode(id) {
    console.log(id);
      this.navCtrl.push(QrcodePage,{id:id});
  }

  public criarPromocao() : void {
    this.navCtrl.push(CriarPromo);
  }
}
