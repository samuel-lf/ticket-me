import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CardPromo } from '../../models/cardPromo';
import { InicioEmpresaComponent } from '../inicio-empresa/inicio-empresa.component';

@Component({
  templateUrl: './criar-promo.html'
})
export class CriarPromo {
  public lista: Observable<CardPromo[]>;
  public cardPromo = {}
  public dataFimPromo:any;
  public empresa:any = {};
  constructor(private navCtrl: NavController,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private alertCtrl: AlertController) {

      let uid = afAuth.auth.currentUser.uid;

      db.collection('usuarios').doc(uid).valueChanges().subscribe((empresa) => { this.empresa = empresa; });

      this.lista = db.collection<CardPromo>('listCardPromo', ref => ref.where('uid','==',uid)).valueChanges();

      db.collection('promocoes').doc(uid).valueChanges().subscribe((cardPromo)=> {
        this.cardPromo = cardPromo;
      })

}


  public registrarPromo(form: NgForm): void{

   let nomeCard: string = form.value.nomeCard;
   let pontos: string = form.value.pontos;
   let dataFimPromo: string = form.value.dataFimPromo;
   let empresa: string = this.afAuth.auth.currentUser.uid;

      this.db.collection("promocoes").add({
         nome: nomeCard,
         pontos: parseInt(pontos),
         dataFimPromo:dataFimPromo,
         empresa: empresa,
         nomeEmpresa: this.empresa.nome
       })
       .then(ref =>{
         this.db.collection("promocoes").doc(ref.id).update({id:ref.id})
         this.navCtrl.pop();
       })
       .catch((error)=>{
         this.alertCtrl.create({
           title:"Erro no registro",
           subTitle: error.message,
           buttons: ["Ok"]

         }).present();
       })
        //.push(InicioEmpresaComponent);
    }

}


