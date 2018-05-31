import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html'
})
export class RegistroEmpresaComponent  {

  constructor(private afAuth: AngularFireAuth,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private db: AngularFirestore) { }

  public voltar():void{
    this.navCtrl.pop();
  }

  public registrarEmp(form: NgForm): void{

   let nome: string = form.value.nome;
   let cnpj: string = form.value.cnpj;
   let email: string = form.value.email;
   let senha: string = form.value.senha;

   if(nome ==''){

        let msgName = {
          title: 'Falha no registro',
          subTitle: 'Nome Obrigatório',
          buttons: ["OK"]
        }
        this.alertCtrl.create(msgName).present();
  }

  if(cnpj ==''){

        let msgName = {
          title: 'Falha no registro',
          subTitle: 'CNPJ Obrigatório',
          buttons: ["OK"]
        }
        this.alertCtrl.create(msgName).present();
   }


    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
    .then((empresa) =>{
      this.db.collection("usuarios/").doc(empresa.uid)
       .set({
         tipo:'empresa',
         nome: nome,
         cnpj:cnpj,
         email: email
       })
       .catch((error)=>{
         this.alertCtrl.create({
           title:"Erro no registro",
           subTitle: error.message,
           buttons: ["Ok"]
           
         }).present();
       })
    })

  }

}

