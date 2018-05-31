import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: './ler-qrcode.html'
})
export class LerQrCode {

  scannedCode = null;

constructor(public navCtrl: NavController,
              public db: AngularFirestore,
              public loadCtrl: LoadingController,
              public afAuth:AngularFireAuth,
              public barcodeScanner: BarcodeScanner) { }


}