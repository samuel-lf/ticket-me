import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html'
})
export class RegistroUsuarioComponent {

  constructor(private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private db: AngularFirestore) { }

  public voltar(): void {
    this.navCtrl.pop();
  }

  public registrarUser(form: NgForm): void {

    let nome: string = form.value.nome;
    let tel: string = form.value.telefone;
    let email: string = form.value.email;
    let senha: string = form.value.senha;


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
            tipo:'usuario',
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

