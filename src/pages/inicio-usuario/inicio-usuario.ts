import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../../models/usuario';


@Component({
  templateUrl: 'inicio-usuario.html'
})
export class InicioUsuario {

public lista: Observable<any[]>;
public user: any = {}
public uid : string;


  constructor(public navCtrl: NavController,
              public db : AngularFirestore,
              public afAuth:AngularFireAuth) {

    let uid = afAuth.auth.currentUser.uid;
    this.uid = uid;

    this.lista = db.collection<Usuario>('listCadUser', ref => ref.where('uid','==',uid)).valueChanges();

     db.collection('usuarios').doc(uid).valueChanges().subscribe((user)=> {
       this.user= user;
     })
     this.lista = db.collection('usuarios').doc(uid).collection("participacoes").valueChanges();

  }

  public resgatar(participacao) : void {

    console.log(participacao);

    this.db.collection('resgates').add({
      eid: participacao.eid,
      nomeEmpresa: participacao.nomeEmpresa,
      nomePromocao: participacao.nome,
      nomeUsuario: this.user.nome,
      pid: participacao.id,
      resgatado: false,
      uid: this.uid
    }).then((ref) => {
      this.db.collection('resgates').doc(ref.id).update({id: ref.id}).then(() => {
        let novos_pontos = participacao.pontos - participacao.pontos_totais;
        this.db.collection('usuarios').doc(this.uid).collection("participacoes").doc(participacao.id).update({pontos: novos_pontos});
      })
    });
  }
}
