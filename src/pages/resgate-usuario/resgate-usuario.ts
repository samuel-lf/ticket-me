import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-resgate-usuario',
  templateUrl: 'resgate-usuario.html',
})
export class ResgateUsuarioPage {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public aftAuth: AngularFireAuth,
    public db: AngularFirestore) {

      let uid = aftAuth.auth.currentUser.uid;
      this.lista = db.collection('resgates', ref => ref.where('uid', '==', uid)).valueChanges();
  }
}
