import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-resgate-empresa',
  templateUrl: 'resgate-empresa.html',
})
export class ResgateEmpresaPage {

  public lista: Observable<any[]>;
  public uid : string;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public aftAuth: AngularFireAuth,
      public db: AngularFirestore) {

        this.uid = aftAuth.auth.currentUser.uid;
        this.lista = db.collection('resgates', ref => ref.where('eid', '==', this.uid)).valueChanges();
  }

  public premiar(id) : void {
    this.db.collection('resgates').doc(id).update({resgatado: true, data: new Date().toISOString()});
  }
}
