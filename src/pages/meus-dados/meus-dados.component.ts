import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.html'
})
export class MeusDados {

 public user = {}

  constructor(public navCtrl: NavController,
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,) {

    let uid = afAuth.auth.currentUser.uid;

    db.collection('usuarios').doc(uid).valueChanges().subscribe((user) => {
      this.user = user;
    })
  }
  public voltar(): void {
    this.navCtrl.pop();
  }

  public atualizar(f: NgForm): void {

    let nome: string = f.value.nome;
    let tel: string = f.value.telefone;
    let email: string = f.value.email;
    let senha: string = f.value.senha;


    if (nome == '') {

      let msgName = {
        title: 'Falha no registro',
        subTitle: 'Nome obrigatório',
        buttons: ["OK"]
      }
      this.alertCtrl.create(msgName).present();
    }

    if (tel == '') {

      let msgName = {
        title: 'Falha no registro',
        subTitle: 'Telefone obrigatório',
        buttons: ["OK"]
      }
      this.alertCtrl.create(msgName).present();
    }

    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        this.db.collection("usuarios").doc(user.uid)
          .set({
            nome: nome,
            telefone: tel,
            email: email
          })
          .catch((error) => {
            this.alertCtrl.create({
              title: "Erro no registro",
              subTitle: error.message,
              buttons: ["Ok"]

            }).present();
          })
      })

  }


}

