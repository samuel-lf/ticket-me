//Service
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

//Componente
import { InicioUsuario } from '../inicio-usuario/inicio-usuario';
//import { InicioEmpresaComponent } from '../inicio-empresa/inicio-empresa.component';

import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';
import { RegistroEmpresaComponent } from '../registro-empresa/registro-empresa.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth,
              private alertCtrl: AlertController,
              private navCtrl: NavController) { }

  entrar(form: NgForm){
      let email : string = form.value.email;
      let senha:  string = form.value.senha;

      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then(user => {
      //  this.navCtrl.setRoot(InicioUsuario)
      })

      .catch(error => {
        let msg;
        switch (error.code) {
          case 'auth/invalid-email':
            msg = "E-mail invalido";
            break;
          case 'auth/user-not-found':
            msg = "Usuario não encontrado";
            break;
          case 'auth/wrong-password':
            msg = "Senha invalida";
            break
        }

        let alerta = {
          title: 'Falha no acesso',
          subTitle: msg,
          buttons: ["OK"]
        }
        this.alertCtrl.create(alerta).present();
      });


}

 public registrarUser() : void{

      this.navCtrl.push(RegistroUsuarioComponent);

  }

 public registrarEmp() : void{   

      this.navCtrl.push(RegistroEmpresaComponent);

  }
}