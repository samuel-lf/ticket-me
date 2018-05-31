import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get("id")
    }
  
  
}
